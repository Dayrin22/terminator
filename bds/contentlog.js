const _0x3beb6a=_0x30ff;(function(_0x2988fa,_0x2774e5){const _0x89ebe8=_0x30ff,_0x4ea1d0=_0x2988fa();while(!![]){try{const _0x3b8e61=parseInt(_0x89ebe8(0x169))/0x1+parseInt(_0x89ebe8(0x16d))/0x2*(parseInt(_0x89ebe8(0x165))/0x3)+-parseInt(_0x89ebe8(0x15d))/0x4+parseInt(_0x89ebe8(0x156))/0x5*(-parseInt(_0x89ebe8(0x15c))/0x6)+-parseInt(_0x89ebe8(0x16e))/0x7*(parseInt(_0x89ebe8(0x167))/0x8)+-parseInt(_0x89ebe8(0x160))/0x9+parseInt(_0x89ebe8(0x16b))/0xa;if(_0x3b8e61===_0x2774e5)break;else _0x4ea1d0['push'](_0x4ea1d0['shift']());}catch(_0x3f7eb9){_0x4ea1d0['push'](_0x4ea1d0['shift']());}}}(_0x4c57,0xb02e4));function _0x4c57(){const _0x90764d=['1702038tyJOqS','process','819872WRslwX','ignore.json','920148QqxtSQ','warn','13374510IavJCf','includes','4inEgnH','21EHgxDq','path','forEach','./ignore.json','132470MkPKxS','logs','join','length','error','appdata','174mWmfmA','1225064STGBTR',']\x20Found\x20','\x20content\x20log','11597499inFKxw',']\x20Detected\x20','log',']\x20Content\x20log\x20directory\x20is\x20not\x20found,\x20make\x20sure\x20\x22content-log-file-enabled\x22\x20is\x20set\x20to\x20true','filter'];_0x4c57=function(){return _0x90764d;};return _0x4c57();}const {existsSync,readFileSync,readdirSync,writeFileSync}=require('fs'),path=require(_0x3beb6a(0x16f)),{env,exit}=require(_0x3beb6a(0x166)),{getTime}=require('./time.js'),logsCache=require(_0x3beb6a(0x171)),logsPath=path[_0x3beb6a(0x158)](env[_0x3beb6a(0x15b)],_0x3beb6a(0x157));function _0x30ff(_0x33b722,_0x23cb54){const _0x4c577c=_0x4c57();return _0x30ff=function(_0x30ffa2,_0x402c75){_0x30ffa2=_0x30ffa2-0x156;let _0x46ed0f=_0x4c577c[_0x30ffa2];return _0x46ed0f;},_0x30ff(_0x33b722,_0x23cb54);}let ContentLogs='';if(existsSync(logsPath)){let logDir=readdirSync(logsPath)[_0x3beb6a(0x164)](_0x8df154=>!logsCache[_0x3beb6a(0x16c)](_0x8df154));console[_0x3beb6a(0x162)]('['+getTime()+_0x3beb6a(0x15e)+logDir[_0x3beb6a(0x159)]+_0x3beb6a(0x15f)),writeFileSync(path[_0x3beb6a(0x158)](__dirname,_0x3beb6a(0x168)),'[]');logDir[_0x3beb6a(0x159)]>0x0&&(logDir[_0x3beb6a(0x170)](_0x528321=>{const _0x4453b7=_0x3beb6a;console[_0x4453b7(0x16a)]('['+getTime()+_0x4453b7(0x161)+_0x528321),ContentLogs+=readFileSync(path[_0x4453b7(0x158)](logsPath,_0x528321))['toString']();}),console[_0x3beb6a(0x15a)](ContentLogs),exit(0x1));;}else throw'['+getTime()+_0x3beb6a(0x163);