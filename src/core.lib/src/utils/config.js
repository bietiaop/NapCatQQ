const _0x3532c1=_0x21e0;function _0x5676(){const _0x28ec2c=['.json','1759580IOqukA','49134kJroGX','392693vYRLEK','24wDARIx','getConfigPath','6JfGxyl','8PcyRuL','479960TmYiUU','964872RwRvCm','consoleLogLevel','9829hqklwz','DEBUG','napcat_','fileLog','fileLogLevel','consoleLog','INFO','673680WrlcVu'];_0x5676=function(){return _0x28ec2c;};return _0x5676();}(function(_0x1e078a,_0x3913d7){const _0x472f31=_0x21e0,_0xdf1053=_0x1e078a();while(!![]){try{const _0xbbb82a=parseInt(_0x472f31(0x1cb))/0x1*(parseInt(_0x472f31(0x1c7))/0x2)+parseInt(_0x472f31(0x1d5))/0x3*(-parseInt(_0x472f31(0x1d7))/0x4)+-parseInt(_0x472f31(0x1c8))/0x5+-parseInt(_0x472f31(0x1d9))/0x6*(-parseInt(_0x472f31(0x1d6))/0x7)+-parseInt(_0x472f31(0x1d2))/0x8+parseInt(_0x472f31(0x1c9))/0x9+parseInt(_0x472f31(0x1d4))/0xa;if(_0xbbb82a===_0x3913d7)break;else _0xdf1053['push'](_0xdf1053['shift']());}catch(_0x12456f){_0xdf1053['push'](_0xdf1053['shift']());}}}(_0x5676,0x1870f));function _0x21e0(_0x503096,_0x3a11e3){const _0x567671=_0x5676();return _0x21e0=function(_0x21e0db,_0x3ff9af){_0x21e0db=_0x21e0db-0x1c7;let _0x5a60a0=_0x567671[_0x21e0db];return _0x5a60a0;},_0x21e0(_0x503096,_0x3a11e3);}import _0x117bac from'node:path';import{LogLevel}from'@/common/utils/log';import{ConfigBase}from'@/common/utils/ConfigBase';import{selfInfo}from'@/core/data';class Config extends ConfigBase{[_0x3532c1(0x1ce)]=!![];[_0x3532c1(0x1d0)]=!![];[_0x3532c1(0x1cf)]=LogLevel[_0x3532c1(0x1cc)];[_0x3532c1(0x1ca)]=LogLevel[_0x3532c1(0x1d1)];constructor(){super();}[_0x3532c1(0x1d8)](){const _0x1b3bfa=_0x3532c1;return _0x117bac['join'](this['getConfigDir'](),_0x1b3bfa(0x1cd)+selfInfo['uin']+_0x1b3bfa(0x1d3));}}export const napCatConfig=new Config();