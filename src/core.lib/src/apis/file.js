const _0x146e2b=_0x86af;(function(_0x4cf837,_0x5d6e08){const _0x197be2=_0x86af,_0x5214c8=_0x4cf837();while(!![]){try{const _0x4bf7d8=parseInt(_0x197be2(0x1ce))/0x1+-parseInt(_0x197be2(0x1f9))/0x2*(parseInt(_0x197be2(0x215))/0x3)+-parseInt(_0x197be2(0x1bf))/0x4*(parseInt(_0x197be2(0x203))/0x5)+parseInt(_0x197be2(0x1d3))/0x6+parseInt(_0x197be2(0x1f2))/0x7+-parseInt(_0x197be2(0x1c9))/0x8+parseInt(_0x197be2(0x1b7))/0x9;if(_0x4bf7d8===_0x5d6e08)break;else _0x5214c8['push'](_0x5214c8['shift']());}catch(_0x504da4){_0x5214c8['push'](_0x5214c8['shift']());}}}(_0x33e3,0x5de6e));import{ChatType,ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x22b9c1 from'path';import _0x43f84f from'fs';import _0x4e8eea from'fs/promises';import{logDebug,logError}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x213a39 from'file-type';function _0x86af(_0x21992b,_0x5987f6){const _0x33e3e9=_0x33e3();return _0x86af=function(_0x86af00,_0x18fe0a){_0x86af00=_0x86af00-0x1a7;let _0x3cb118=_0x33e3e9[_0x86af00];return _0x3cb118;},_0x86af(_0x21992b,_0x5987f6);}import{MsgListener}from'@/core/listeners';import _0x571c4a from'image-size';function _0x33e3(){const _0x225433=['CfsCm','10YYUGDM','clearCacheDataByKeys','HrDQz','indexOf','set','downloadMedia','peerUid','util','unlink','WrGNA','XyPqp','basename','JuMrm','getFileCacheInfo','addCacheScannedPaths','elementId','get','MUwAT','91506qnlBsw','图片url获取失败','UXHld','zadNW','LahwU','md5HexStr','sourcePath','zpHqT','图片rkey有效','downloadRichMedia','wFYyp','hookApi\x20is\x20not\x20available','getImageSize','getRKey','receive\x20downloadMedia\x20task','wNJwH','nhzgX','Fslav','addCacheScanedPaths','group','getDesktopTmpPath','getCacheSessionPathList','iNqEc','5173029FcPsta','nThKS','&rkey=','getFileType','EQHJN','hENOh','catch','originImageUrl','1045488rdFloW','aTZQG','getMsgService','toUpperCase','join','/gchatpic_new/0/0-0-','开始调用moeHook获取rkey','getImageUrl','getHotUpdateCachePath','clearChatCache','2701136wWgiyA','检查rkey是否有效','getChatCacheList','uploadFile','then','741211snpLAj','onRichMediaDownloadComplete','zPRWd','AnhSd','ZnaGn','808818jXEucQ','ext','PhXHF','elements','GChFH','error','AwJLd','nafho','copyFile','downloadMedia\x20complete','OAZyo','qEKgc','find','/download','addListener','WaPLP','isAvailable','picElement','getChatCacheInfo','mBdfZ','JobII','existsSync','fileTypeFromFile','start\x20downloadMedia','下载超时','filePath','chatType','defaultFileDownloadPath','clearChatCacheInfo','now','VYhHr','1975715rPHoiu','kNEOg','startsWith','tlsEp','getFileSize','fileUuid','getStorageCleanService','32TssfhC','session','CdjEb','图片rkey获取失败','BlOyq','PIC','onLoginSuccess','wuuSl','aTQJb'];_0x33e3=function(){return _0x225433;};return _0x33e3();}import{sessionConfig}from'@/core/sessionConfig';import{hookApi}from'@/core/external/hook';import{randomUUID}from'crypto';import{AsyncQueue}from'@/common/utils/AsyncQueue';import{sleep}from'@/common/utils/helper';import _0xaf5c56 from'https';let privateImageRKey='',groupImageRKey='',lastGetPrivateRKeyTime=0x0,lastGetGroupRKeyTime=0x0;const rkeyExpireTime=0x3e8*0x3c*0x1e,getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x146e2b(0x1cf)]=_0x52c054=>{const _0x3a49e9=_0x146e2b,_0x225853={'wuuSl':function(_0x1e54e2,_0x3d0744){return _0x1e54e2(_0x3d0744);}};for(const [_0x249d96,_0x3888d3]of downloadMediaTasks){_0x225853[_0x3a49e9(0x200)](_0x3888d3,_0x52c054),downloadMediaTasks['delete'](_0x249d96);}},setTimeout(()=>{const _0x29b328=_0x146e2b;napCatCore[_0x29b328(0x1ff)](()=>{const _0xbd26ce=_0x29b328;napCatCore[_0xbd26ce(0x1e1)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async['getFileType'](_0x21b928){const _0x382803=_0x146e2b;return _0x213a39[_0x382803(0x1e9)](_0x21b928);}static async[_0x146e2b(0x1db)](_0x2e0f8f,_0x448a5f){const _0x12014b=_0x146e2b;await napCatCore[_0x12014b(0x20a)][_0x12014b(0x1db)](_0x2e0f8f,_0x448a5f);}static async[_0x146e2b(0x1f6)](_0x3425ad){const _0x34119c=_0x146e2b;return await napCatCore['util'][_0x34119c(0x1f6)](_0x3425ad);}static async[_0x146e2b(0x1cc)](_0xb91dff,_0x1f24a9=ElementType[_0x146e2b(0x1fe)],_0x198b11=0x0){const _0x28bdd6=_0x146e2b,_0x32343d={'AwJLd':function(_0x41e505,_0x486e4c){return _0x41e505+_0x486e4c;},'nThKS':function(_0x50b386,_0x1d9137){return _0x50b386===_0x1d9137;}},_0x75afdd=await calculateFileMD5(_0xb91dff);let _0x469508=(await NTQQFileApi[_0x28bdd6(0x1ba)](_0xb91dff))?.[_0x28bdd6(0x1d4)]||'';_0x469508&&(_0x469508=_0x32343d[_0x28bdd6(0x1d9)]('.',_0x469508));let _0x4783e9=''+_0x22b9c1[_0x28bdd6(0x20e)](_0xb91dff);_0x32343d[_0x28bdd6(0x1b8)](_0x4783e9[_0x28bdd6(0x206)]('.'),-0x1)&&(_0x4783e9+=_0x469508);const _0x5bbb1f=napCatCore[_0x28bdd6(0x1fa)][_0x28bdd6(0x1c1)]()['getRichMediaFilePathForGuild']({'md5HexStr':_0x75afdd,'fileName':_0x4783e9,'elementType':_0x1f24a9,'elementSubType':_0x198b11,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x28bdd6(0x1db)](_0xb91dff,_0x5bbb1f);const _0x497254=await NTQQFileApi[_0x28bdd6(0x1f6)](_0xb91dff);return{'md5':_0x75afdd,'fileName':_0x4783e9,'path':_0x5bbb1f,'fileSize':_0x497254,'ext':_0x469508};}static async[_0x146e2b(0x208)](_0x5576be,_0x29b30e,_0x14688d,_0x35a352,_0x539296,_0x83db93,_0x274dec=0x3e8*0x3c*0x2,_0x119854=![]){const _0x1ce967=_0x146e2b,_0x3ea0dd={'MUwAT':_0x1ce967(0x1eb),'zpHqT':_0x1ce967(0x1dc),'JuMrm':function(_0x16fd92,_0x268797){return _0x16fd92===_0x268797;},'UXHld':'downloadPath','HDqfx':function(_0x46fd91,_0x688191){return _0x46fd91(_0x688191);},'VYhHr':function(_0x294584,_0x2dabd5,_0x2d77ac){return _0x294584(_0x2dabd5,_0x2d77ac);},'Fslav':function(_0x363981,_0x6e07d9,_0x5fba26,_0xb7e241,_0x132b55,_0xc13a8f,_0x1c61eb,_0x258e84,_0x2b9a70,_0x20743a){return _0x363981(_0x6e07d9,_0x5fba26,_0xb7e241,_0x132b55,_0xc13a8f,_0x1c61eb,_0x258e84,_0x2b9a70,_0x20743a);},'iKRjs':_0x1ce967(0x1ae),'tlsEp':function(_0x4219e6,_0xa64c00,_0x26462c,_0x33303c,_0x12ef72,_0x2532c1,_0x3f1921,_0x4f03a5,_0x5a2571,_0x4fe76b){return _0x4219e6(_0xa64c00,_0x26462c,_0x33303c,_0x12ef72,_0x2532c1,_0x3f1921,_0x4f03a5,_0x5a2571,_0x4fe76b);},'PhXHF':_0x1ce967(0x1ea)};_0x3ea0dd[_0x1ce967(0x1b1)](logDebug,_0x3ea0dd['iKRjs'],_0x5576be,_0x29b30e,_0x14688d,_0x35a352,_0x539296,_0x83db93,_0x274dec,_0x119854);if(_0x83db93&&_0x43f84f[_0x1ce967(0x1e8)](_0x83db93)){if(_0x119854)try{await _0x4e8eea[_0x1ce967(0x20b)](_0x83db93);}catch(_0x23fc68){}else return _0x83db93;}return _0x3ea0dd[_0x1ce967(0x1f5)](logDebug,_0x3ea0dd[_0x1ce967(0x1d5)],_0x5576be,_0x29b30e,_0x14688d,_0x35a352,_0x539296,_0x83db93,_0x274dec,_0x119854),new Promise((_0x318a28,_0x4c34dd)=>{const _0x2c6830=_0x1ce967,_0x3aa68e={'rxFzk':function(_0x4ad823,_0x14e8b0,_0x2be698,_0x376dd1){return _0x4ad823(_0x14e8b0,_0x2be698,_0x376dd1);},'HrDQz':_0x3ea0dd[_0x2c6830(0x1a7)],'mANCD':function(_0x14836e,_0x4032bb){const _0x51f22d=_0x2c6830;return _0x3ea0dd[_0x51f22d(0x20f)](_0x14836e,_0x4032bb);},'JYSli':function(_0x460ae7,_0x5a3e43,_0x3b217c){return _0x460ae7(_0x5a3e43,_0x3b217c);},'BlOyq':_0x3ea0dd[_0x2c6830(0x217)],'EQHJN':function(_0x5ed836,_0x41cce1){return _0x3ea0dd['HDqfx'](_0x5ed836,_0x41cce1);}};let _0x4d32ca=![];const _0x3d31f0=_0x3c78d4=>{const _0x4b1e07=_0x2c6830;_0x3aa68e['rxFzk'](logDebug,_0x3aa68e[_0x4b1e07(0x205)],_0x3c78d4,_0x5576be);if(_0x3aa68e['mANCD'](_0x3c78d4['msgId'],_0x5576be)){_0x4d32ca=!![];let _0x5dac68=_0x3c78d4[_0x4b1e07(0x1ec)];if(_0x5dac68[_0x4b1e07(0x1f4)]('\x5c')){const _0x2863c8=sessionConfig[_0x4b1e07(0x1ee)];_0x3aa68e['JYSli'](logDebug,_0x3aa68e[_0x4b1e07(0x1fd)],_0x2863c8),_0x5dac68=_0x22b9c1[_0x4b1e07(0x1c3)](_0x2863c8,_0x5dac68);}_0x3aa68e[_0x4b1e07(0x1bb)](_0x318a28,_0x5dac68);}};downloadMediaTasks[_0x2c6830(0x207)](randomUUID(),_0x3d31f0),_0x3ea0dd[_0x2c6830(0x1f1)](setTimeout,()=>{const _0x262a11=_0x2c6830;!_0x4d32ca&&_0x4c34dd(_0x3ea0dd[_0x262a11(0x214)]);},_0x274dec),napCatCore[_0x2c6830(0x1fa)][_0x2c6830(0x1c1)]()[_0x2c6830(0x1a9)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x5576be,'chatType':_0x29b30e,'peerUid':_0x14688d,'elementId':_0x35a352,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x539296});});}static async[_0x146e2b(0x1ac)](_0xc4a0c6){const _0x5045e5={'VzCkG':function(_0x414ddd,_0x22f0a1){return _0x414ddd(_0x22f0a1);},'qEKgc':function(_0x2a8b83,_0x191f7e,_0x28d1da){return _0x2a8b83(_0x191f7e,_0x28d1da);}};return new Promise((_0x5943b8,_0x51f708)=>{const _0x475dbd=_0x86af,_0x29d326={'OAZyo':function(_0x12cab1,_0x3c0357){return _0x5045e5['VzCkG'](_0x12cab1,_0x3c0357);}};_0x5045e5[_0x475dbd(0x1de)](_0x571c4a,_0xc4a0c6,(_0x4afaca,_0x2c3861)=>{const _0x38c869=_0x475dbd;_0x4afaca?_0x29d326[_0x38c869(0x1dd)](_0x51f708,_0x4afaca):_0x29d326[_0x38c869(0x1dd)](_0x5943b8,_0x2c3861);});});}static async[_0x146e2b(0x1c6)](_0x4bd897){const _0x18b4c2=_0x146e2b,_0x3ac886={'zPRWd':_0x18b4c2(0x1fc),'nhzgX':_0x18b4c2(0x1d8),'AnhSd':function(_0x23a36e,_0x1490e7){return _0x23a36e(_0x1490e7);},'ulklm':'获取图片rkey...','cllme':function(_0x512b05,_0x47eabd){return _0x512b05*_0x47eabd;},'iNqEc':function(_0x1fcd50,_0x473445){return _0x1fcd50(_0x473445);},'frDIU':function(_0x50aee4,_0x4f6bba){return _0x50aee4(_0x4f6bba);},'JobII':function(_0x517c4a,_0x3ceaa2){return _0x517c4a+_0x3ceaa2;},'kNEOg':function(_0x4db5cc,_0x27101f,_0x48aa1c){return _0x4db5cc(_0x27101f,_0x48aa1c);},'LahwU':function(_0x4e33b0,_0x1fca0f){return _0x4e33b0(_0x1fca0f);},'hENOh':function(_0x53eae4,_0x193134,_0x198047,_0x24b5a0){return _0x53eae4(_0x193134,_0x198047,_0x24b5a0);},'CdjEb':'图片rkey有误','NqQSy':function(_0x264c36){return _0x264c36();},'QUOwX':function(_0x56050a,_0x3f7bff){return _0x56050a(_0x3f7bff);},'WrGNA':function(_0x51c694,_0x18c9e5){return _0x51c694!==_0x18c9e5;},'WaPLP':_0x18b4c2(0x1e0),'CfsCm':_0x18b4c2(0x1b9),'nafho':_0x18b4c2(0x1ab),'mBdfZ':function(_0x1d3c5b,_0x352655){return _0x1d3c5b-_0x352655;},'aTZQG':function(_0x596f1e,_0x17aed9){return _0x596f1e+_0x17aed9;},'ZnaGn':function(_0x3734c7,_0x52a8c4){return _0x3734c7||_0x52a8c4;},'TzYIm':function(_0x42713c,_0x467430){return _0x42713c||_0x467430;},'wNJwH':_0x18b4c2(0x216)},_0x2b2a43=_0x3ac886[_0x18b4c2(0x20c)](_0x4bd897[_0x18b4c2(0x1ed)],ChatType[_0x18b4c2(0x1b3)]),_0x395be0=_0x4bd897[_0x18b4c2(0x1d6)][_0x18b4c2(0x1df)](_0x3ba220=>!!_0x3ba220[_0x18b4c2(0x1e4)]);if(!_0x395be0)return'';const _0x202565=_0x395be0[_0x18b4c2(0x1e4)][_0x18b4c2(0x1be)],_0x517467=_0x395be0[_0x18b4c2(0x1e4)][_0x18b4c2(0x21a)],_0x2a8343=_0x395be0[_0x18b4c2(0x1e4)]['md5HexStr'],_0x43050c=_0x395be0[_0x18b4c2(0x1e4)][_0x18b4c2(0x1f7)],_0xb62c3f=_0x10efb3=>{_0x2b2a43?(privateImageRKey=_0x10efb3,lastGetPrivateRKeyTime=Date['now']()):(groupImageRKey=_0x10efb3,lastGetGroupRKeyTime=Date['now']());};if(_0x202565){if(_0x202565[_0x18b4c2(0x1f4)](_0x3ac886[_0x18b4c2(0x1e2)])){if(_0x202565['includes'](_0x3ac886[_0x18b4c2(0x202)]))return IMAGE_HTTP_HOST_NT+_0x202565;if(!hookApi[_0x18b4c2(0x1e3)]())return _0x3ac886[_0x18b4c2(0x1d1)](logDebug,_0x3ac886[_0x18b4c2(0x1da)]),'';const _0x2f3836=async()=>{const _0x1b43b3=_0x18b4c2,_0x34cfe8={'XyPqp':function(_0x5f5a5a,_0x4eaae7){return _0x5f5a5a(_0x4eaae7);},'zadNW':_0x3ac886[_0x1b43b3(0x1d0)],'wFYyp':_0x3ac886[_0x1b43b3(0x1b0)]};_0x3ac886['AnhSd'](logDebug,_0x3ac886['ulklm']),NTQQFileApi[_0x1b43b3(0x208)](_0x4bd897['msgId'],_0x4bd897[_0x1b43b3(0x1ed)],_0x4bd897[_0x1b43b3(0x209)],_0x395be0[_0x1b43b3(0x212)],'',_0x395be0[_0x1b43b3(0x1e4)][_0x1b43b3(0x21b)],_0x3ac886['cllme'](0x3e8,0x1e),![])[_0x1b43b3(0x1cd)](_0xc0ae37=>{})[_0x1b43b3(0x1bd)](logError),await _0x3ac886[_0x1b43b3(0x1b6)](sleep,0x3e8),_0x3ac886['frDIU'](logDebug,_0x1b43b3(0x1c5));const _0x46ce19=hookApi[_0x1b43b3(0x1ad)]()||'',_0x479c8a=_0x3ac886[_0x1b43b3(0x1e7)](_0x3ac886[_0x1b43b3(0x1e7)](IMAGE_HTTP_HOST_NT,_0x202565),_0x46ce19);if(_0x46ce19)try{_0x3ac886['kNEOg'](logDebug,_0x1b43b3(0x1ca),_0x479c8a),await new Promise((_0x5952ba,_0x92b16d)=>{const _0x4c6a21=_0x1b43b3,_0x213822={'GChFH':function(_0x2f0508,_0x3d9011){const _0x54912c=_0x86af;return _0x34cfe8[_0x54912c(0x20d)](_0x2f0508,_0x3d9011);},'aTQJb':_0x34cfe8[_0x4c6a21(0x218)]};_0xaf5c56[_0x4c6a21(0x213)](_0x479c8a,_0x251ea0=>{const _0x33b07d=_0x4c6a21;_0x251ea0['statusCode']!==0xc8?_0x213822[_0x33b07d(0x1d7)](_0x92b16d,_0x213822[_0x33b07d(0x201)]):_0x213822[_0x33b07d(0x1d7)](_0x5952ba,_0x251ea0);})['on'](_0x34cfe8[_0x4c6a21(0x1aa)],_0x359ab1=>{const _0x22fbca=_0x4c6a21;_0x34cfe8[_0x22fbca(0x20d)](_0x92b16d,_0x359ab1);});}),_0x3ac886['kNEOg'](logDebug,_0x1b43b3(0x1a8),_0x479c8a),_0x3ac886[_0x1b43b3(0x219)](_0xb62c3f,_0x46ce19);}catch(_0x4d27bb){return _0x3ac886[_0x1b43b3(0x1bc)](logError,_0x3ac886[_0x1b43b3(0x1fb)],_0x479c8a,_0x4d27bb),'';}return _0x46ce19;},_0x1857c4=new Promise((_0x28f411,_0x4d6c39)=>{getRKeyTaskQueue['addTask'](async()=>{const _0xd8f1c0=await _0x3ac886['NqQSy'](_0x2f3836);_0x3ac886['QUOwX'](_0x28f411,_0xd8f1c0);});}),_0x65985c=_0x2b2a43?privateImageRKey:groupImageRKey,_0x18f3a7=_0x2b2a43?lastGetPrivateRKeyTime:lastGetGroupRKeyTime;if(_0x3ac886[_0x18b4c2(0x1e6)](Date[_0x18b4c2(0x1f0)](),_0x18f3a7)>rkeyExpireTime||!_0x65985c){const _0x3e163c=await _0x1857c4;if(_0x3e163c)return _0x3ac886['JobII'](IMAGE_HTTP_HOST_NT+_0x202565,''+_0x3e163c);else _0x3ac886[_0x18b4c2(0x1f3)](logError,_0x3ac886[_0x18b4c2(0x1d0)],_0x202565);}if(_0x65985c)return _0x3ac886[_0x18b4c2(0x1c0)](IMAGE_HTTP_HOST_NT,_0x202565)+(''+_0x65985c);return'';}else return IMAGE_HTTP_HOST+_0x202565;}else{if(_0x3ac886[_0x18b4c2(0x1d2)](_0x2a8343,_0x517467))return IMAGE_HTTP_HOST+_0x18b4c2(0x1c4)+_0x3ac886['TzYIm'](_0x2a8343,_0x517467)[_0x18b4c2(0x1c2)]()+'/0';}return logDebug(_0x3ac886[_0x18b4c2(0x1af)],_0x4bd897),'';}}export class NTQQFileCacheApi{static async['setCacheSilentScan'](_0x19c3e4=!![]){return'';}static[_0x146e2b(0x1b5)](){return'';}static['clearCache'](_0x1b7400=['tmp','hotUpdate']){const _0x87e938=_0x146e2b;return napCatCore[_0x87e938(0x1fa)][_0x87e938(0x1f8)]()[_0x87e938(0x204)](_0x1b7400);}static[_0x146e2b(0x211)](_0x11f47c={}){const _0x40aea8=_0x146e2b;return napCatCore['session']['getStorageCleanService']()[_0x40aea8(0x1b2)](_0x11f47c);}static['scanCache'](){const _0x578b78=_0x146e2b;return napCatCore[_0x578b78(0x1fa)]['getStorageCleanService']()['scanCache']();}static[_0x146e2b(0x1c7)](){return'';}static[_0x146e2b(0x1b4)](){return'';}static[_0x146e2b(0x1cb)](_0x5ea93c,_0x1c521e=0x3e8,_0x2f8f3a=0x0){const _0x3f324c=_0x146e2b;return napCatCore[_0x3f324c(0x1fa)][_0x3f324c(0x1f8)]()[_0x3f324c(0x1e5)](_0x5ea93c,_0x1c521e,0x1,_0x2f8f3a);}static[_0x146e2b(0x210)](_0x139780,_0xd017d7=0x3e8,_0x1c93ab){const _0x3ca21d=_0x1c93ab?_0x1c93ab:{'fileType':_0x139780};}static async[_0x146e2b(0x1c8)](_0x4f8d02=[],_0x4d0c01=[]){const _0x47c074=_0x146e2b;return napCatCore[_0x47c074(0x1fa)]['getStorageCleanService']()[_0x47c074(0x1ef)](_0x4f8d02,_0x4d0c01);}}