import os from "node:os";
import pidusage from 'pidusage';
import EventEmitter from "node:events";

export interface SystemStatus {
    cpu: {
        model: string,
        speed: string
        usage: {
            system: string
            qq: string
        },
    },
    memory: {
        usage: {
            system: string
            qq: string
        }
    },
}

export class StatusHelper {
    private get sysCpuInfo() {
        const { total, active } = os.cpus().map(cpu => {
            const times = cpu.times;
            const total = times.user + times.nice + times.sys + times.idle + times.irq;
            const active = total - times.idle;
            return { total, active };
        }).reduce((acc, cur) => ({
            total: acc.total + cur.total,
            active: acc.active + cur.active
        }), { total: 0, active: 0 });
        return {
            usage: ((active / total) * 100).toFixed(2),
            model: os.cpus()[0].model,
            speed: os.cpus()[0].speed
        };
    }

    private get sysMemoryUsage() {
        const { total, free } = { total: os.totalmem(), free: os.freemem() };
        return ((total - free) / total * 100).toFixed(2);
    }

    private async qqUsage() {
        return await pidusage(process.pid);
    }

    async systemStatus(): Promise<SystemStatus> {
        const qqUsage = await this.qqUsage();
        return {
            cpu: {
                model: this.sysCpuInfo.model,
                speed: (this.sysCpuInfo.speed / 1000).toFixed(2),
                usage: {
                    system: this.sysCpuInfo.usage,
                    qq: qqUsage.cpu.toFixed(2)
                },
            },
            memory: {
                usage: {
                    system: this.sysMemoryUsage,
                    qq: (qqUsage.memory / os.totalmem() * 100).toFixed(2)
                }
            },
        };
    }
}

class StatusHelperSubscription extends EventEmitter {
    private statusHelper: StatusHelper;
    private interval: NodeJS.Timeout | null = null;

    constructor(time: number = 3000) {
        super();
        this.statusHelper = new StatusHelper();
        this.on('newListener', (event: string) => {
            if (event === 'statusUpdate' && this.listenerCount('statusUpdate') === 0) {
                this.startInterval(time);
            }
        });
        this.on('removeListener', (event: string) => {
            if (event === 'statusUpdate' && this.listenerCount('statusUpdate') === 0) {
                this.stopInterval();
            }
        });
    }

    private startInterval(time: number) {
        this.interval ??= setInterval(async () => {
            const status = await this.statusHelper.systemStatus();
            this.emit('statusUpdate', status);
        }, time);
    }

    private stopInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

export const statusHelperSubscription = new StatusHelperSubscription();
