import { IOB11NetworkAdapter, OB11EmitEventContent } from './index';
import BaseAction from '@/onebot/action/BaseAction';
import express, { Express, Request, Response } from 'express';
import http from 'http';
import { NapCatCore } from '@/core';
import { NapCatOneBot11Adapter } from '../main';

export class OB11PassiveHttpAdapter implements IOB11NetworkAdapter {
    token: string;
    coreContext: NapCatCore;
    obContext: NapCatOneBot11Adapter;
    private app: Express | undefined;
    private server: http.Server | undefined;
    private isOpen: boolean = false;
    private hasBeenClosed: boolean = false;
    private actionMap: Map<string, BaseAction<any, any>> = new Map();
    private port: number;

    constructor(port: number, token: string, coreContext: NapCatCore, onebotContext: NapCatOneBot11Adapter) {
        this.port = port;
        this.token = token;
        this.coreContext = coreContext;
        this.obContext = onebotContext;
    }

    registerAction<T extends BaseAction<P, R>, P, R>(action: T) {
        this.actionMap.set(action.actionName, action);
    }

    registerActionMap(actionMap: Map<string, BaseAction<any, any>>) {
        this.actionMap = actionMap;
    }

    onEvent<T extends OB11EmitEventContent>(event: T) {
        // 事件处理逻辑可以在这里实现
    }

    open() {
        if (this.hasBeenClosed) {
            this.coreContext.context.logger.logError('Cannot open a closed HTTP server');
        }
        if (!this.isOpen) {
            this.initializeServer();
            this.isOpen = true;
        }
    }

    async close() {
        this.isOpen = false;
        this.hasBeenClosed = true;
        this.server?.close();
        this.app = undefined;
    }

    private initializeServer() {
        this.app = express();
        this.server = http.createServer(this.app);

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/', (req, res) => this.handleRequest(req, res));

        this.server.listen(this.port, () => {
            this.coreContext.context.logger.log(`HTTP server listening on port ${this.port}`);
        });
    }

    private async handleRequest(req: Request, res: Response) {
        if (!this.isOpen) {
            res.status(503).send('Server is closed');
            return;
        }

        const actionName = req.path.split('/')[1];
        const action = this.actionMap.get(actionName);
        if (action) {
            try {
                const result = await action.handle(req.body);
                res.json(result);
            } catch (error) {
                res.status(500).send('Internal Server Error');
            }
        } else {
            res.status(404).send('Action not found');
        }
    }
}
