const _0x317593=_0x45eb;(function(_0x38c375,_0x5741b5){const _0x196ace=_0x45eb,_0x2220c0=_0x38c375();while(!![]){try{const _0x105f97=-parseInt(_0x196ace(0x13f))/0x1*(parseInt(_0x196ace(0x124))/0x2)+parseInt(_0x196ace(0x13b))/0x3*(parseInt(_0x196ace(0x13e))/0x4)+parseInt(_0x196ace(0x138))/0x5+parseInt(_0x196ace(0x12f))/0x6*(parseInt(_0x196ace(0x127))/0x7)+parseInt(_0x196ace(0x14e))/0x8*(-parseInt(_0x196ace(0x11b))/0x9)+-parseInt(_0x196ace(0x118))/0xa+-parseInt(_0x196ace(0x148))/0xb;if(_0x105f97===_0x5741b5)break;else _0x2220c0['push'](_0x2220c0['shift']());}catch(_0x460646){_0x2220c0['push'](_0x2220c0['shift']());}}}(_0x6c26,0xb8a87));const {spawn}=require('child_process'),{existsSync,readdirSync,writeFileSync}=require('fs'),{argv}=require(_0x317593(0x135)),path=require(_0x317593(0x130)),{getTime,sleep}=require('./time.js'),properties=require(_0x317593(0x125)),config=require(_0x317593(0x131)),root=path[_0x317593(0x120)](__dirname+_0x317593(0x14f)),logsPath=path[_0x317593(0x120)](root,_0x317593(0x14b));let output='',uptime,mcfunction=[];const child=spawn(_0x317593(0x11e),{'cwd':root});if(!existsSync(root+'/bedrock_server'))throw Error('bedrock_server\x20directory\x20does\x20not\x20exist,\x20unable\x20to\x20start\x20the\x20process.');if(!argv['includes'](_0x317593(0x12e))){let ServerProperties=properties[_0x317593(0x121)](path[_0x317593(0x120)](root,_0x317593(0x14b),_0x317593(0x133)));console[_0x317593(0x150)]('['+getTime()+_0x317593(0x11d)),ServerProperties[_0x317593(0x14d)](_0x317593(0x128),_0x317593(0x12b)),ServerProperties[_0x317593(0x14a)](),console[_0x317593(0x150)]('['+getTime()+_0x317593(0x12a));const ignoreLogs=[];for(const filename of readdirSync(logsPath)){filename[_0x317593(0x143)](_0x317593(0x137))&&filename['endsWith'](_0x317593(0x119))&&ignoreLogs[_0x317593(0x142)](filename);;};writeFileSync(path[_0x317593(0x120)](__dirname,_0x317593(0x126)),JSON[_0x317593(0x129)](ignoreLogs));}else console[_0x317593(0x150)]('['+getTime()+_0x317593(0x13a));child[_0x317593(0x123)][_0x317593(0x134)](_0x317593(0x147)),child[_0x317593(0x13c)][_0x317593(0x12c)](process[_0x317593(0x13c)]),child[_0x317593(0x13c)]['on']('data',_0x233706=>{output+=_0x233706;}),console['log']('['+getTime()+_0x317593(0x149)),child[_0x317593(0x123)][_0x317593(0x14c)](_0x317593(0x140)),child[_0x317593(0x123)][_0x317593(0x14c)](_0x317593(0x122),_0x1983dc=>{if(!!_0x1983dc)throw _0x1983dc;});argv[_0x317593(0x132)](_0x317593(0x139))?(uptime=0x0,mcfunction=[]):(uptime=config[_0x317593(0x11a)],mcfunction=config[_0x317593(0x136)]['commands']);function _0x45eb(_0x3e8808,_0x36ab09){const _0x6c2681=_0x6c26();return _0x45eb=function(_0x45eb14,_0x3ea773){_0x45eb14=_0x45eb14-0x118;let _0x312063=_0x6c2681[_0x45eb14];return _0x312063;},_0x45eb(_0x3e8808,_0x36ab09);}function _0x6c26(){const _0x407150=['ignore.json','9637985pVNdxe','content-log-file-enabled','stringify',']\x20Successfully\x20set\x20\x22content-log-file-enabled\x22\x20to\x20true','true','pipe','length','-write=false','6VzUTky','path','../bds-config.json','includes','server.properties','setEncoding','process','serverInitialize','ContentLog','7156240SlWOlQ','-ignoreConfig',']\x20Disable\x20write\x20permission','3dvabDd','stdout','close','5779128ESoykc','229xJzpAC','cd\x20./bedrock_server\x0a','exitCode','push','startsWith','stop\x0a','split','error','utf-8','9332576UdCOXm',']\x20Sent\x20request\x20to\x20start\x20BDS...','save','bedrock_server','write','set','71312TgWqvu','/../','log','9503430UyoTxf','.txt','server-uptime','1233uvnWJj','end',']\x20Opening\x20bedrock_server/server.properties','bash','Exiting\x20process\x20with\x20code\x201','join','createEditor','LD_LIBRARY_PATH=.\x20./bedrock_server\x0a','stdin','4162pULool','properties-parser'];_0x6c26=function(){return _0x407150;};return _0x6c26();};(async function(){const _0x5e4c08=_0x317593;for(const _0x29a3f2 of mcfunction){await sleep(0x3e8/0x14),child[_0x5e4c08(0x123)]['write'](_0x29a3f2+'\x0a');}await sleep(uptime*0x3e8),child[_0x5e4c08(0x123)][_0x5e4c08(0x14c)](_0x5e4c08(0x144)),child[_0x5e4c08(0x123)][_0x5e4c08(0x11c)]();}()),child['on'](_0x317593(0x13d),()=>{const _0x16aca2=_0x317593;let _0x230da9=output[_0x16aca2(0x145)]('\x0a');_0x230da9[_0x230da9[_0x16aca2(0x12d)]-0x2]!=='Quit\x20correctly'&&(console[_0x16aca2(0x146)](_0x16aca2(0x11f)),process[_0x16aca2(0x141)]=0x1);;});