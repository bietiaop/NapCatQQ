const _0x3a8e27=_0x55c0;function _0x55c0(_0x48514a,_0x1c88d6){const _0x5d1d75=_0x5d1d();return _0x55c0=function(_0x55c076,_0x3d16d7){_0x55c076=_0x55c076-0x17f;let _0x5719a2=_0x5d1d75[_0x55c076];return _0x5719a2;},_0x55c0(_0x48514a,_0x1c88d6);}(function(_0x30ac26,_0x261cfd){const _0x1bec08=_0x55c0,_0x313a38=_0x30ac26();while(!![]){try{const _0xd8ea00=-parseInt(_0x1bec08(0x189))/0x1+-parseInt(_0x1bec08(0x1bd))/0x2+-parseInt(_0x1bec08(0x1ba))/0x3+parseInt(_0x1bec08(0x1b3))/0x4*(-parseInt(_0x1bec08(0x18f))/0x5)+parseInt(_0x1bec08(0x184))/0x6+parseInt(_0x1bec08(0x187))/0x7+parseInt(_0x1bec08(0x19b))/0x8;if(_0xd8ea00===_0x261cfd)break;else _0x313a38['push'](_0x313a38['shift']());}catch(_0x40320a){_0x313a38['push'](_0x313a38['shift']());}}}(_0x5d1d,0xdba6d));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x1fb61d}from'node:fs';import _0x4a658d from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';function _0x5d1d(){const _0xbb5a46=['reply','pic','RNJXh','dice','then','time','fLIKF','PTgBc','get','图片信息','2112888HGLeNg','mface','FACE','WySre','TEXT','toString','dYyqm','646950KWKgoS','AniStickerId','tMLHZ','3029044atYWQa','获取视频信息失败','find','file','error','EVTir','YNNzI','end','MFACE','LXGpt','PTT','文件异常，大小为0','_0.png','wwZut','EpZRr','GvOZj','PgFVw','JpgrS','video','laSwZ','sep','ark','height','QduSI','dirname','4118376UbnSpZ','getImageSize','size','8188026IfWGLK','[商城表情]','687112ydlRbm','rhtpk','rPNSX','VIDEO','PIC','FILE','15nmfebF','NXnvB','AniStickerType','gif','screenshots','unlink','[骰子]','replace','uploadFile','AniStickerPackId','tyEzk','width','24364232htlBmf','MARKDOWN','stringify','Ori','mp4','markdown','QSid','语音转换失败,\x20请检查语音文件是否正常','VEJLL','RPS','text','HYMcx','Thumb','string'];_0x5d1d=function(){return _0xbb5a46;};return _0x5d1d();}import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';import _0x416130 from'./face_config.json';import*as _0x168fe9 from'node:path';export const mFaceCache=new Map();export class SendMsgElementConstructor{static[_0x3a8e27(0x1a5)](_0x538cfb){return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':_0x538cfb,'atType':AtType['notAt'],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x143adc,_0x31d1c1,_0x3623cc,_0x51fe17){const _0x2cb58b=_0x3a8e27;return{'elementType':ElementType[_0x2cb58b(0x1b7)],'elementId':'','textElement':{'content':'@'+_0x51fe17,'atType':_0x3623cc,'atUid':_0x143adc,'atTinyId':'','atNtUid':_0x31d1c1}};}static[_0x3a8e27(0x1a9)](_0x1a0e4,_0x4c6258,_0x544dc4,_0x115d47){return{'elementType':ElementType['REPLY'],'elementId':'','replyElement':{'replayMsgSeq':_0x1a0e4,'replayMsgId':_0x4c6258,'senderUin':_0x544dc4,'senderUinStr':_0x115d47}};}static async[_0x3a8e27(0x1aa)](_0x46f99e,_0xeb8fa8='',_0xbce4f5=0x0){const _0x453b88=_0x3a8e27,_0x40d776={'cLejb':function(_0xeaa74e,_0x43bffa){return _0xeaa74e===_0x43bffa;},'PTgBc':'文件异常，大小为0','rsUVK':function(_0x13cba7,_0x36c1d0){return _0x13cba7(_0x36c1d0);},'YNNzI':_0x453b88(0x1b2)},{md5:_0x41950a,fileName:_0x900b56,path:_0x11c278,fileSize:_0xcc2ff0}=await NTQQFileApi[_0x453b88(0x197)](_0x46f99e,ElementType['PIC'],_0xbce4f5);if(_0x40d776['cLejb'](_0xcc2ff0,0x0))throw _0x40d776[_0x453b88(0x1b0)];const _0x38aab4=await NTQQFileApi[_0x453b88(0x185)](_0x46f99e),_0x47bd27={'md5HexStr':_0x41950a,'fileSize':_0xcc2ff0[_0x453b88(0x1b8)](),'picWidth':_0x38aab4?.[_0x453b88(0x19a)],'picHeight':_0x38aab4?.['height'],'fileName':_0x900b56,'sourcePath':_0x11c278,'original':!![],'picType':_0x40d776['rsUVK'](isGIF,_0x46f99e)?PicType[_0x453b88(0x192)]:PicType['jpg'],'picSubType':_0xbce4f5,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0xeb8fa8};return logDebug(_0x40d776[_0x453b88(0x1c3)],_0x47bd27),{'elementType':ElementType[_0x453b88(0x18d)],'elementId':'','picElement':_0x47bd27};}static async[_0x3a8e27(0x1c0)](_0x45f61b,_0x4c1570=''){const _0x469302=_0x3a8e27,_0x3d4167={'QduSI':function(_0x483591,_0x4413a6){return _0x483591===_0x4413a6;},'EpZRr':_0x469302(0x1c8),'WySre':function(_0x13df5c,_0x23fc32){return _0x13df5c||_0x23fc32;}},{md5:_0x4e6d29,fileName:_0x1a372a,path:_0xdfc5fe,fileSize:_0x28bf4d}=await NTQQFileApi[_0x469302(0x197)](_0x45f61b,ElementType[_0x469302(0x18e)]);if(_0x3d4167[_0x469302(0x182)](_0x28bf4d,0x0))throw _0x3d4167[_0x469302(0x1cb)];const _0x2fae51={'elementType':ElementType[_0x469302(0x18e)],'elementId':'','fileElement':{'fileName':_0x3d4167[_0x469302(0x1b6)](_0x4c1570,_0x1a372a),'filePath':_0xdfc5fe,'fileSize':_0x28bf4d[_0x469302(0x1b8)]()}};return _0x2fae51;}static async[_0x3a8e27(0x1cf)](_0x1d37b4,_0x528aae='',_0x123fe4=''){const _0x5794be=_0x3a8e27,_0x3bfd2c={'rhtpk':function(_0x421091,_0x4aa156){return _0x421091(_0x4aa156);},'tyEzk':'获取视频封面失败，使用默认封面','RNJXh':function(_0x2cc522,_0x37e4bb){return _0x2cc522(_0x37e4bb);},'dYyqm':_0x5794be(0x1c4),'EVTir':_0x5794be(0x1c1),'LXGpt':function(_0x327b65,_0x2adccf){return _0x327b65+_0x2adccf;},'TLKqe':_0x5794be(0x1c8),'GvOZj':_0x5794be(0x19f),'fLIKF':function(_0x4a5eab,_0x3ee2ba,_0xcd5132){return _0x4a5eab(_0x3ee2ba,_0xcd5132);},'HYMcx':'视频信息','NXnvB':function(_0x4fd0b8,_0x40ab3d){return _0x4fd0b8(_0x40ab3d);},'VEJLL':function(_0x17e324,_0x2e3767){return _0x17e324||_0x2e3767;},'PgFVw':function(_0x194be2,_0x1d8e4d){return _0x194be2+_0x1d8e4d;}},{fileName:_0x13be5b,path:_0x5aa59c,fileSize:_0x2048bd,md5:_0x4b54f3}=await NTQQFileApi['uploadFile'](_0x1d37b4,ElementType[_0x5794be(0x18c)]);if(_0x2048bd===0x0)throw _0x3bfd2c['TLKqe'];let _0x532250=_0x5aa59c[_0x5794be(0x196)](_0x168fe9[_0x5794be(0x17f)]+_0x5794be(0x19e)+_0x168fe9[_0x5794be(0x17f)],_0x168fe9[_0x5794be(0x17f)]+_0x5794be(0x1a7)+_0x168fe9[_0x5794be(0x17f)]);_0x532250=_0x168fe9[_0x5794be(0x183)](_0x532250);let _0xf1126d={'width':0x780,'height':0x438,'time':0xf,'format':_0x3bfd2c[_0x5794be(0x1cc)],'size':_0x2048bd,'filePath':_0x1d37b4};try{_0xf1126d=await _0x3bfd2c[_0x5794be(0x18a)](getVideoInfo,_0x5aa59c),_0x3bfd2c[_0x5794be(0x1af)](logDebug,_0x3bfd2c[_0x5794be(0x1a6)],_0xf1126d);}catch(_0x594c72){_0x3bfd2c['fLIKF'](logError,_0x5794be(0x1be),_0x594c72);}const _0x2a3e5f=new Promise((_0x358745,_0x9c707b)=>{const _0x4a12b4=_0x5794be,_0x582d9f={'JpgrS':_0x3bfd2c[_0x4a12b4(0x199)]},_0x42a2df=_0x4b54f3+_0x4a12b4(0x1c9),_0x1378cf=_0x168fe9['join'](_0x532250,_0x42a2df);_0x3bfd2c[_0x4a12b4(0x1ab)](_0x4a658d,_0x1d37b4)['on'](_0x3bfd2c[_0x4a12b4(0x1b9)],()=>{})['on'](_0x3bfd2c[_0x4a12b4(0x1c2)],_0x2692b2=>{const _0x4d9631=_0x4a12b4,_0x472c18={'fRywO':function(_0x135283,_0x44b4d0){return _0x135283(_0x44b4d0);},'wwZut':function(_0x431282,_0x3d8176){return _0x431282(_0x3d8176);}};logDebug(_0x582d9f[_0x4d9631(0x1ce)],_0x2692b2),_0x123fe4?_0x1fb61d['copyFile'](_0x123fe4,_0x1378cf)['then'](()=>{_0x472c18['fRywO'](_0x358745,_0x1378cf);})['catch'](_0x9c707b):_0x1fb61d['writeFile'](_0x1378cf,defaultVideoThumb)[_0x4d9631(0x1ad)](()=>{const _0x5cfc39=_0x4d9631;_0x472c18[_0x5cfc39(0x1ca)](_0x358745,_0x1378cf);})['catch'](_0x9c707b);})[_0x4a12b4(0x193)]({'timestamps':[0x0],'filename':_0x42a2df,'folder':_0x532250,'size':_0x3bfd2c[_0x4a12b4(0x1c6)](_0x3bfd2c['LXGpt'](_0xf1126d[_0x4a12b4(0x19a)],'x'),_0xf1126d['height'])})['on'](_0x4a12b4(0x1c4),()=>{const _0x24afa9=_0x4a12b4;_0x3bfd2c[_0x24afa9(0x18a)](_0x358745,_0x1378cf);});}),_0x58b36d=new Map(),_0x292517=await _0x2a3e5f,_0x2a7a1d=(await _0x1fb61d['stat'](_0x292517))[_0x5794be(0x186)];_0x58b36d['set'](0x0,_0x292517);const _0x12351d=await _0x3bfd2c[_0x5794be(0x190)](calculateFileMD5,_0x292517),_0x45e460={'elementType':ElementType[_0x5794be(0x18c)],'elementId':'','videoElement':{'fileName':_0x3bfd2c[_0x5794be(0x1a3)](_0x528aae,_0x13be5b),'filePath':_0x5aa59c,'videoMd5':_0x4b54f3,'thumbMd5':_0x12351d,'fileTime':_0xf1126d[_0x5794be(0x1ae)],'thumbPath':_0x58b36d,'thumbSize':_0x2a7a1d,'thumbWidth':_0xf1126d[_0x5794be(0x19a)],'thumbHeight':_0xf1126d[_0x5794be(0x181)],'fileSize':_0x3bfd2c[_0x5794be(0x1cd)]('',_0x2048bd)}};return _0x45e460;}static async['ptt'](_0x43cd45){const _0x3703c2=_0x3a8e27,_0x3eb36b={'FUVmT':function(_0x2fbcca,_0x10e593){return _0x2fbcca(_0x10e593);},'ntgtl':function(_0x49c86f,_0x4e30fd){return _0x49c86f===_0x4e30fd;}},{converted:_0x3e919f,path:_0x466d68,duration:_0x52131e}=await _0x3eb36b['FUVmT'](encodeSilk,_0x43cd45);if(!_0x466d68)throw _0x3703c2(0x1a2);const {md5:_0xf7970b,fileName:_0x171d6e,path:_0x2b0839,fileSize:_0x1f2922}=await NTQQFileApi['uploadFile'](_0x466d68,ElementType[_0x3703c2(0x1c7)]);if(_0x3eb36b['ntgtl'](_0x1f2922,0x0))throw _0x3703c2(0x1c8);return _0x3e919f&&_0x1fb61d[_0x3703c2(0x194)](_0x466d68)[_0x3703c2(0x1ad)](),{'elementType':ElementType['PTT'],'elementId':'','pttElement':{'fileName':_0x171d6e,'filePath':_0x2b0839,'md5HexStr':_0xf7970b,'fileSize':_0x1f2922,'duration':_0x52131e||0x1,'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static['face'](_0x5e41c0){const _0x776813=_0x3a8e27,_0x5ae475={'laSwZ':function(_0x34c5a1,_0x370dc4){return _0x34c5a1(_0x370dc4);}},_0x23ed76=_0x416130['sysface'],_0x1bd19b=_0x416130['emoji'],_0x32c717=_0x23ed76[_0x776813(0x1bf)](_0x3abfc4=>_0x3abfc4[_0x776813(0x1a1)]===_0x5e41c0[_0x776813(0x1b8)]());_0x5e41c0=_0x5ae475[_0x776813(0x1d0)](parseInt,_0x5e41c0[_0x776813(0x1b8)]());let _0x26fb28=0x1;return _0x5e41c0>=0xde&&(_0x26fb28=0x2),_0x32c717[_0x776813(0x191)]&&(_0x26fb28=0x3),{'elementType':ElementType[_0x776813(0x1b5)],'elementId':'','faceElement':{'faceIndex':_0x5e41c0,'faceType':_0x26fb28,'faceText':_0x32c717['QDes'],'stickerId':_0x32c717[_0x776813(0x1bb)],'stickerType':_0x32c717[_0x776813(0x191)],'packId':_0x32c717[_0x776813(0x198)],'sourceType':0x1}};}static[_0x3a8e27(0x1b4)](_0x58ccb7,_0x1d36c1,_0x23c3c7,_0x252d0b){const _0x44706f=_0x3a8e27,_0x1f7ff9={'sYudA':_0x44706f(0x188)};return{'elementType':ElementType[_0x44706f(0x1c5)],'marketFaceElement':{'emojiPackageId':_0x58ccb7,'emojiId':_0x1d36c1,'key':_0x23c3c7,'faceName':_0x252d0b||mFaceCache[_0x44706f(0x1b1)](_0x1d36c1)||_0x1f7ff9['sYudA']}};}static['dice'](_0x5eb4d3){const _0x2ec701=_0x3a8e27;return{'elementType':ElementType[_0x2ec701(0x1b5)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x2ec701(0x1ac)],'faceType':FaceType[_0x2ec701(0x1ac)],'faceText':_0x2ec701(0x195),'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static['rps'](_0x3b5ac3){const _0x3be5fa=_0x3a8e27,_0xe72325={'rPNSX':'[包剪锤]'};return{'elementType':ElementType[_0x3be5fa(0x1b5)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x3be5fa(0x1a4)],'faceText':_0xe72325[_0x3be5fa(0x18b)],'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x3a8e27(0x180)](_0x4e1661){const _0x2b900a=_0x3a8e27,_0x38897b={'CHFsC':function(_0x5e20aa,_0x44ab9d){return _0x5e20aa!==_0x44ab9d;},'tMLHZ':_0x2b900a(0x1a8)};return _0x38897b['CHFsC'](typeof _0x4e1661,_0x38897b[_0x2b900a(0x1bc)])&&(_0x4e1661=JSON[_0x2b900a(0x19d)](_0x4e1661)),{'elementType':ElementType['ARK'],'elementId':'','arkElement':{'bytesData':_0x4e1661,'linkInfo':null,'subElementType':null}};}static[_0x3a8e27(0x1a0)](_0x281d9e){const _0x2a4b08=_0x3a8e27;return{'elementType':ElementType[_0x2a4b08(0x19c)],'elementId':'','markdownElement':{'content':_0x281d9e}};}}