//2024.8.22

/*
@Name：大叔Emby自动观看保号
@Author：怎么肥事
使用方法：手动观看一次，提示获取成功✅即可食用
[rewrite_local]
^https:\/\/emby3\.mcjoker\.xyz:443\/emby\/Sessions\/Playing -url script-request-body https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/DaShuEmby.js

[task_local]
35 22 15,30 * * https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/DaShuEmby.js, tag=大叔Emby自动观看, enabled=true

[MITM]
hostname = emby3.mcjoker.xyz

*/
const isRequest = typeof $request !== 'undefined';
const isSurge = typeof $httpClient !== 'undefined'; 
const isLoon = typeof $loon !== 'undefined'; 
const isQX = typeof $task !== 'undefined'; 

const notify = (title, subtitle, message) => {
    if (isQX) $notify(title, subtitle, message);
    if (isSurge) $notification.post(title, subtitle, message);
    if (isLoon) $notification.post(title, subtitle, message);
};

const setValueForKey = (value, key) => {
    if (isQX) return $prefs.setValueForKey(value, key);
    if (isSurge || isLoon) return $persistentStore.write(value, key);
};

const valueForKey = (key) => {
    if (isQX) return $prefs.valueForKey(key);
    if (isSurge || isLoon) return $persistentStore.read(key);
};

const fetch = (options) => {
    if (isQX) return $task.fetch(options);
    if (isSurge) {
        return new Promise((resolve, reject) => {
            $httpClient.post(options, (error, response, data) => {
                if (error) reject(error);
                else resolve({ statusCode: response.status, headers: response.headers, body: data });
            });
        });
    }
    if (isLoon) {
        return new Promise((resolve, reject) => {
            $httpClient.post(options, (error, response, data) => {
                if (error) reject(error);
                else resolve({ statusCode: response.status, headers: response.headers, body: data });
            });
        });
    }
};

var _0xodN='y.js.cn.v7';const _0x95c885=_0xc1ff;function _0x6ac5(){const _0x331a68=(function(){return[...[_0xodN,'ClYybeJ.XjFhs.qIcnoYr.vfb7QBSmJhmrwS==','nSk6raZdJWldH8kG','WRLsECoHW7i','DNyoW6uO','r8oRWOG','dGa4ELi','WO9DESk+WQi','W5egDCo4fG','CdRcHX9O','FMFcKmklwa','W5/dHmkWW4RdMq','yKxcHCkPEW','W6mEz8o8hW','WPxcS2rTjebzrmkuw8oNEW','zZZdNSkBwq','r8oaW4vAW4BdMde','t2iOW4yg','i3qXDwO','F8kqW4D6BG','WOrjFCkYWQVdTSoakxZcMYpdKCorvXbw','zYtcMrDjCSkcwaFdPSoOzY4','W6ruWRZdUmkI','5AER5y64dCkicsFORPFMSjxMJk/OJiK','ixSPW6HeW5hdOW','bCoHhv3dUW','5Asr5y6kbL9CFq','WRffBCk4WPe','WRlcQbzazW','suNcLmkXvq','dtCVrvG','iLWkwvm','nxldHLuomSogCGBdNmo7','5AA/5y6gW4vbr8or','AL8gv8orW63dGx3cQCoOWOmLWQhcSCodlwz1ysK','6zsX6k+K5lYq5OkinSob','kGrdzIW','5AsS5y2mWQfpWRrH','W6NdLSkkWO3cNW','iI9/WR82WRVcHvftWP4+qmoq','W6/dOSkRWQ7cOG','WRKDyMe/W5vDWRS','vSk8WP5xia','jWa8vvRdNvvSW74','C8krrCoNaG','kSoZj8oqnSozrCkniW','WQBcHq5srW','nCo4WPWqW6LH','yK3dJg8ia8o+','qG/cPmo6qq','WRWwqhaD','W7WPW7ZcSG8','54I45OgC56o3W6FcNmk5'],...(function(){return['zSkMzXFcLmkDWPW/pWXHaW','5yEE5AEa5Pk55PAA','W5SSbhiZ','WQ0ComkjeG','W50Ax8oroa','WQPJWRmveSkyWPOcBthdJ8k+','WOjVqIX5cmo0WRldPND8pG','54Ql5OgF56oQAsO','AxOcx8oe','54Im5OgD56g1jgO','EdpcIsPvWPyCE8k3vCkLhCkGWPhcQZT+','zCorWQDgWOm','W5KOWRZcGCoV','zuz+D27dMgLoW7a','ncHLW6BdMW','W79uFSouxw4IjXhdKtldOq','bw9LWOW','WOKbkSkCncWfjG/dMXldNIrKWPldRYC','DtRdJ8kfuSkw','WRVcNXfQsa','ytdcV8oxzq','mdrTW797','e3ddIL8LmSowyaFdLSo6wsBdTxnmW7jhWQrL','6zsF6k6W5l2p5Okyc8oE','W6yVtmoKnG','sthcUcD4WO0xBq','WOVcJCoIWORcPmkakHxdMmo4WOTo','x8ovWQ7dR8kw','W4lcU8kRWQ3dJW','5OUC5yUZ4P2n','mSoFWOCrW4a','5P2h5OI75yIq5l+u5AYF55UFW5eSWORMIB3ORBBMSQZLPie','tmkTWQbKdG','5OQ25yIE4P2u','B8oVxaFdLcJdTa','W6pdI8kuW6NdNq','W5TogX5j','WOXRCCoxW5fqWQpdVmoKkq','EZxcSHjz','WQfoomkCAf3cVSk8q0BcJCo5','s0pcSmkYtW','W5HQcYDq','WQqjkCkbdIWt','W5C0W5jwtq','mWWQDe4','WRuoemk9ga','WPOaW5NcU8oYlmotvbWzWQG/WQfU','lZjGW4PNW4FdQdFcSokDNYO','C8oGDmk0gmo0W5FcGqSSl2/cTq','5PoY5PAd5OUL5yI38j2CHq','tXJcT8oXvSkcW7G','CKuuW48W'];}())];}());_0x6ac5=function(){return _0x331a68;};return _0x6ac5();}function _0xc1ff(_0x29908f,_0x4cb7ba){const _0x3a7a4d=_0x6ac5();return _0xc1ff=function(_0x14f20d,_0x106f95){_0x14f20d=_0x14f20d-0x1e2;let _0x6ac567=_0x3a7a4d[_0x14f20d];if(_0xc1ff['VvQMCI']===undefined){var _0xc1ffe0=function(_0x29ceb0){const _0x124a15='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4235b7='',_0x1a461d='',_0x4ec0c6=_0x4235b7+_0xc1ffe0;for(let _0x3796e2=0x0,_0x3556d0,_0x307ea7,_0x221a8a=0x0;_0x307ea7=_0x29ceb0['charAt'](_0x221a8a++);~_0x307ea7&&(_0x3556d0=_0x3796e2%0x4?_0x3556d0*0x40+_0x307ea7:_0x307ea7,_0x3796e2++%0x4)?_0x4235b7+=_0x4ec0c6['charCodeAt'](_0x221a8a+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x3556d0>>(-0x2*_0x3796e2&0x6)):_0x3796e2:0x0){_0x307ea7=_0x124a15['indexOf'](_0x307ea7);}for(let _0x1f7d2d=0x0,_0x13338c=_0x4235b7['length'];_0x1f7d2d<_0x13338c;_0x1f7d2d++){_0x1a461d+='%'+('00'+_0x4235b7['charCodeAt'](_0x1f7d2d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1a461d);};const _0x56de75=function(_0x487eab,_0x20198b){let _0x5a14d3=[],_0x50acd8=0x0,_0xf0e3e9,_0x28f22b='';_0x487eab=_0xc1ffe0(_0x487eab);let _0x4c2985;for(_0x4c2985=0x0;_0x4c2985<0x100;_0x4c2985++){_0x5a14d3[_0x4c2985]=_0x4c2985;}for(_0x4c2985=0x0;_0x4c2985<0x100;_0x4c2985++){_0x50acd8=(_0x50acd8+_0x5a14d3[_0x4c2985]+_0x20198b['charCodeAt'](_0x4c2985%_0x20198b['length']))%0x100,_0xf0e3e9=_0x5a14d3[_0x4c2985],_0x5a14d3[_0x4c2985]=_0x5a14d3[_0x50acd8],_0x5a14d3[_0x50acd8]=_0xf0e3e9;}_0x4c2985=0x0,_0x50acd8=0x0;for(let _0x4efb52=0x0;_0x4efb52<_0x487eab['length'];_0x4efb52++){_0x4c2985=(_0x4c2985+0x1)%0x100,_0x50acd8=(_0x50acd8+_0x5a14d3[_0x4c2985])%0x100,_0xf0e3e9=_0x5a14d3[_0x4c2985],_0x5a14d3[_0x4c2985]=_0x5a14d3[_0x50acd8],_0x5a14d3[_0x50acd8]=_0xf0e3e9,_0x28f22b+=String['fromCharCode'](_0x487eab['charCodeAt'](_0x4efb52)^_0x5a14d3[(_0x5a14d3[_0x4c2985]+_0x5a14d3[_0x50acd8])%0x100]);}return _0x28f22b;};_0xc1ff['TQTwIC']=_0x56de75,_0x29908f=arguments,_0xc1ff['VvQMCI']=!![];}const _0x13987a=_0x3a7a4d[0x0],_0x57cfd6=_0x14f20d+_0x13987a,_0x4fd8ec=_0x29908f[_0x57cfd6];if(!_0x4fd8ec){if(_0xc1ff['YxxgQY']===undefined){const _0x30e9a6=function(_0x491ce9){this['cGTdyc']=_0x491ce9,this['BPdvST']=[0x1,0x0,0x0],this['kYZFDg']=function(){return'newState';},this['CHNnfj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mZtqTH']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x30e9a6['prototype']['HuSkZZ']=function(){const _0xf17634=new RegExp(this['CHNnfj']+this['mZtqTH']),_0x2da6b5=_0xf17634['test'](this['kYZFDg']['toString']())?--this['BPdvST'][0x1]:--this['BPdvST'][0x0];return this['RYLkQG'](_0x2da6b5);},_0x30e9a6['prototype']['RYLkQG']=function(_0x21c789){if(!Boolean(~_0x21c789))return _0x21c789;return this['jQIlgC'](this['cGTdyc']);},_0x30e9a6['prototype']['jQIlgC']=function(_0x5dbe2d){for(let _0x249423=0x0,_0x14752d=this['BPdvST']['length'];_0x249423<_0x14752d;_0x249423++){this['BPdvST']['push'](Math['round'](Math['random']())),_0x14752d=this['BPdvST']['length'];}return _0x5dbe2d(this['BPdvST'][0x0]);},new _0x30e9a6(_0xc1ff)['HuSkZZ'](),_0xc1ff['YxxgQY']=!![];}_0x6ac567=_0xc1ff['TQTwIC'](_0x6ac567,_0x106f95),_0x29908f[_0x57cfd6]=_0x6ac567;}else _0x6ac567=_0x4fd8ec;return _0x6ac567;},_0xc1ff(_0x29908f,_0x4cb7ba);};(function(_0x36854b,_0x5c61c4,_0x290ed2,_0x4b7974,_0x5c0c38,_0x5488c1,_0x3e4dcb){return _0x36854b=_0x36854b>>0x2,_0x5488c1='hs',_0x3e4dcb='hs',function(_0x441aa7,_0x580023,_0x23d4f6,_0x2ca417,_0x2c8890){const _0x1502d6=_0xc1ff;_0x2ca417='tfi',_0x5488c1=_0x2ca417+_0x5488c1,_0x2c8890='up',_0x3e4dcb+=_0x2c8890,_0x5488c1=_0x23d4f6(_0x5488c1),_0x3e4dcb=_0x23d4f6(_0x3e4dcb),_0x23d4f6=0x0;const _0x233a8d=_0x441aa7();while(!![]&&--_0x4b7974+_0x580023){try{_0x2ca417=-parseInt(_0x1502d6(0x219,'aevc'))/0x1*(parseInt(_0x1502d6(0x1ee,'dwIR'))/0x2)+-parseInt(_0x1502d6(0x205,'*l1!'))/0x3*(parseInt(_0x1502d6(0x20e,'vD[p'))/0x4)+parseInt(_0x1502d6(0x222,'q@&)'))/0x5*(parseInt(_0x1502d6(0x220,'$qBG'))/0x6)+-parseInt(_0x1502d6(0x243,'Rppn'))/0x7*(-parseInt(_0x1502d6(0x247,'^2!3'))/0x8)+parseInt(_0x1502d6(0x20b,'Croy'))/0x9*(parseInt(_0x1502d6(0x218,'q]RQ'))/0xa)+-parseInt(_0x1502d6(0x241,'S0AQ'))/0xb+-parseInt(_0x1502d6(0x23a,'w^qj'))/0xc;}catch(_0x4b2ac9){_0x2ca417=_0x23d4f6;}finally{_0x2c8890=_0x233a8d[_0x5488c1]();if(_0x36854b<=_0x4b7974)_0x23d4f6?_0x5c0c38?_0x2ca417=_0x2c8890:_0x5c0c38=_0x2c8890:_0x23d4f6=_0x2c8890;else{if(_0x23d4f6==_0x5c0c38['replace'](/[CXIYqbmFfQlJheBoSwr=]/g,'')){if(_0x2ca417===_0x580023){_0x233a8d['un'+_0x5488c1](_0x2c8890);break;}_0x233a8d[_0x3e4dcb](_0x2c8890);}}}}}(_0x290ed2,_0x5c61c4,function(_0x4019c1,_0x480a92,_0x3f337f,_0x15667f,_0x11c5cb,_0x4bf6d7,_0x274be5){return _0x480a92='\x73\x70\x6c\x69\x74',_0x4019c1=arguments[0x0],_0x4019c1=_0x4019c1[_0x480a92](''),_0x3f337f=`\x72\x65\x76\x65\x72\x73\x65`,_0x4019c1=_0x4019c1[_0x3f337f]('\x76'),_0x15667f=`\x6a\x6f\x69\x6e`,(0x17f472,_0x4019c1[_0x15667f](''));});}(0x314,0xc13fd,_0x6ac5,0xc7),_0x6ac5)&&(_0xodN=0xc7);if(isRequest){const _0x135420=$request['url'],_0x2df16b=JSON['stringify']($request[_0x95c885(0x245,'H1r0')]),_0x5d46d5=$request[_0x95c885(0x223,'6NLL')];setValueForKey(_0x135420,_0x95c885(0x1f2,'%Zk^')),setValueForKey(_0x2df16b,_0x95c885(0x229,'vD[p')),_0x5d46d5&&setValueForKey(_0x5d46d5,'Emby_request_body'),notify('大叔Emby请求捕获',_0x95c885(0x234,'naDJ'),''),$done({});}else{function _0x523039(){const _0xaa5131=_0x95c885,_0x465db2={'OfRzh':_0xaa5131(0x1f8,'aVFL'),'VlalT':function(_0x15d135){return _0x15d135();},'mEWbM':_0xaa5131(0x213,'ire('),'mLJua':function(_0x88067,_0x3cf0e8){return _0x88067!==_0x3cf0e8;},'fEdmE':_0xaa5131(0x1f1,'F(J7'),'FkYAS':function(_0xa5a8cc,_0x41f06d){return _0xa5a8cc!==_0x41f06d;},'wTiQc':_0xaa5131(0x1e5,'%Zk^'),'FMiBV':_0xaa5131(0x232,'XJEt'),'CzxSF':'Emby_request_url','aBeVY':function(_0x3a228c,_0x84ba73,_0x236c14){return _0x3a228c(_0x84ba73,_0x236c14);},'eCjFa':_0xaa5131(0x200,'c&ki'),'GAcok':function(_0x525d65,_0x4fd8a6,_0x3f700e){return _0x525d65(_0x4fd8a6,_0x3f700e);},'dkQjX':_0xaa5131(0x224,'q@&)'),'YCayl':function(_0x33ed9b,_0x160771,_0x20c238,_0x169ffe){return _0x33ed9b(_0x160771,_0x20c238,_0x169ffe);},'acplh':_0xaa5131(0x230,'q@&)'),'cHAUC':function(_0x54f71b,_0x3db5e1){return _0x54f71b(_0x3db5e1);},'kVQCY':'Ksfay','HbeOo':_0xaa5131(0x231,'4aI['),'ZtvFf':_0xaa5131(0x226,'bO8u'),'gxdHz':_0xaa5131(0x244,'Lwh7'),'XCTmv':_0xaa5131(0x212,'*^#u'),'KoRdD':function(_0x6d7f75,_0x56761f){return _0x6d7f75===_0x56761f;},'vFMJM':_0xaa5131(0x236,'e8X]'),'qbjWO':function(_0x5529bb,_0x2cbae9,_0x46f6ee,_0x12ee08){return _0x5529bb(_0x2cbae9,_0x46f6ee,_0x12ee08);},'sCvhj':function(_0x44bf06){return _0x44bf06();},'WuJTC':function(_0xd06f64,_0xda0fa0){return _0xd06f64!==_0xda0fa0;},'vxTGZ':_0xaa5131(0x1e7,'l46R'),'XdVOW':'OfZCo','fxayJ':function(_0x2b3ae4,_0x55cd63){return _0x2b3ae4(_0x55cd63);},'jUwlF':function(_0x518422,_0x3a88e2){return _0x518422||_0x3a88e2;},'JNtNw':_0xaa5131(0x20c,'bO8u'),'LBBCq':_0xaa5131(0x228,'xt7f'),'FHfqJ':function(_0x249f2e,_0x446d1a,_0x7bb8f9,_0x24355a){return _0x249f2e(_0x446d1a,_0x7bb8f9,_0x24355a);},'qdqeP':_0xaa5131(0x214,'Croy'),'GdLiD':function(_0x325583,_0x4d9204){return _0x325583+_0x4d9204;},'RLszb':'无内容❌'},_0xdb21b=(function(){const _0xbacdfc=_0xaa5131,_0xf5d91c={'nICdU':_0x465db2[_0xbacdfc(0x211,'QB0X')],'DGVGT':function(_0x515a86,_0x56df1c){return _0x465db2['mLJua'](_0x515a86,_0x56df1c);},'APmJy':_0x465db2['fEdmE']};if(_0x465db2[_0xbacdfc(0x239,'l46R')](_0x465db2[_0xbacdfc(0x221,'T7fo')],_0x465db2[_0xbacdfc(0x233,'IhGP')]))return _0x3bd004[_0xbacdfc(0x22c,'l46R')]()[_0xbacdfc(0x225,'0)1J')]('(((.+)+)+)+$')['toString']()[_0xbacdfc(0x1fe,'vD[p')](_0x51d137)['search'](xGtueB[_0xbacdfc(0x21e,'#%aq')]);else{let _0x183214=!![];return function(_0x1d8a98,_0x462480){const _0x2ab1c=_0xbacdfc,_0x48d84d={'HfFds':_0x465db2[_0x2ab1c(0x23e,'q]RQ')],'ybXXs':function(_0x10384b){const _0x1b9d42=_0x2ab1c;return _0x465db2[_0x1b9d42(0x1e8,'cqrn')](_0x10384b);}},_0x192349=_0x183214?function(){const _0x24e437=_0x2ab1c;if(_0x462480){if(_0xf5d91c['DGVGT'](_0xf5d91c[_0x24e437(0x206,'GTdg')],_0x24e437(0x22b,'w^qj'))){const _0x223dab=_0x462480[_0x24e437(0x215,'aevc')](_0x1d8a98,arguments);return _0x462480=null,_0x223dab;}else _0x5a1db8(_0x48d84d[_0x24e437(0x22f,'*NOh')],'错误','错误信息:\x20'+(_0x1cc008[_0x24e437(0x235,'^2!3')]||_0x36fb1c)),_0x48d84d[_0x24e437(0x240,'q@&)')](_0x353e84);}}:function(){};return _0x183214=![],_0x192349;};}}()),_0x2eb585=_0x465db2['GAcok'](_0xdb21b,this,function(){const _0x472a6c=_0xaa5131;return _0x2eb585[_0x472a6c(0x207,'P1SG')]()[_0x472a6c(0x20d,'4aI[')](_0x465db2[_0x472a6c(0x208,'IhGP')])['toString']()['constructor'](_0x2eb585)['search'](_0x465db2['mEWbM']);});_0x465db2['sCvhj'](_0x2eb585);try{if(_0x465db2[_0xaa5131(0x21f,'*^#u')](_0x465db2['vxTGZ'],_0x465db2[_0xaa5131(0x1ef,']B2O')])){let _0x44bfd5=_0x465db2[_0xaa5131(0x1fa,'bO8u')](valueForKey,_0x465db2[_0xaa5131(0x1e6,'w^qj')]),_0x5aec83=_0x465db2[_0xaa5131(0x1e9,'e8X]')](valueForKey,_0x465db2[_0xaa5131(0x1f0,'R7)w')]),_0x5007bb=valueForKey(_0xaa5131(0x21d,'l46R'));if(_0x465db2['jUwlF'](!_0x44bfd5,!_0x5aec83)){if(_0x465db2[_0xaa5131(0x1ea,'cqrn')]!==_0x465db2[_0xaa5131(0x237,']WrO')])throw new Error(_0x465db2[_0xaa5131(0x248,'W5Fz')]);else throw new _0x4ce592(_0x465db2[_0xaa5131(0x227,'H1r0')]);}let _0x10b73a=JSON[_0xaa5131(0x1f9,'%Zk^')](_0x5aec83);_0x465db2[_0xaa5131(0x21b,'c&ki')](notify,_0x465db2['OfRzh'],_0x465db2[_0xaa5131(0x210,'P1SG')],_0x465db2[_0xaa5131(0x204,'GTdg')](_0xaa5131(0x242,'xt7f'),'Body:\x20'+(_0x5007bb?'✅':_0x465db2['RLszb']))),fetch({'url':_0x44bfd5,'method':'POST','headers':_0x10b73a,'body':_0x5007bb})['then'](_0x5d050c=>{const _0x367bf3=_0xaa5131;if(_0x465db2[_0x367bf3(0x20a,'Croy')]===_0x465db2['HbeOo']){if(_0x7e5318){const _0x22dc4c=_0x13e431[_0x367bf3(0x216,'q@&)')](_0x4fbef4,arguments);return _0x1c4a52=null,_0x22dc4c;}}else{if(_0x5d050c['statusCode']===0xcc){if(_0x465db2[_0x367bf3(0x22e,'4Thu')](_0x465db2[_0x367bf3(0x1e4,'$qBG')],'oOfSe')){const _0x2a6f34=_0x487eab[_0x367bf3(0x1e3,'4Thu')],_0x516063=_0x20198b[_0x367bf3(0x209,'$qBG')](_0x5a14d3[_0x367bf3(0x23d,'q@&)')]),_0x410ab5=_0x50acd8['body'];_0xf0e3e9(_0x2a6f34,_0x465db2['CzxSF']),_0x465db2[_0x367bf3(0x1fb,'cqrn')](_0x28f22b,_0x516063,_0x465db2[_0x367bf3(0x246,']B2O')]),_0x410ab5&&_0x465db2[_0x367bf3(0x202,'XJEt')](_0x491ce9,_0x410ab5,_0x465db2[_0x367bf3(0x1fd,'R7)w')]),_0x465db2[_0x367bf3(0x1fc,'$qBG')](_0x4efb52,_0x367bf3(0x1f5,'q@&)'),_0x465db2[_0x367bf3(0x1ed,'0)1J')],''),_0x465db2[_0x367bf3(0x23b,'cqrn')](_0x30e9a6,{});}else notify(_0x367bf3(0x1ff,'q]RQ'),_0x465db2[_0x367bf3(0x23f,'$qBG')],_0x465db2['XCTmv']);}else{if(_0x465db2[_0x367bf3(0x1f7,'ire(')](_0x465db2['vFMJM'],_0x465db2['vFMJM']))notify(_0x465db2[_0x367bf3(0x1f4,'S0AQ')],'失败',_0x367bf3(0x21c,'aevc')+_0x5d050c[_0x367bf3(0x238,'W5Fz')]);else{const _0x5220ce=_0x173747[_0x367bf3(0x1e2,']B2O')](_0xda525b,arguments);return _0x21cd07=null,_0x5220ce;}}_0x465db2['VlalT']($done);}},_0x373bc3=>{const _0x8a995f=_0xaa5131;_0x465db2[_0x8a995f(0x1eb,'w^qj')](notify,_0x465db2[_0x8a995f(0x23c,']WrO')],'错误',_0x8a995f(0x22a,'0)1J')+_0x373bc3[_0x8a995f(0x20f,'H1r0')]),$done();});}else _0x465db2['YCayl'](_0x33d0cf,_0xaa5131(0x203,'#%aq'),'失败',_0xaa5131(0x21a,'l46R')+_0x55671d['statusCode']);}catch(_0x33122b){notify(_0x465db2[_0xaa5131(0x217,'w^qj')],'错误',_0xaa5131(0x201,'cqrn')+(_0x33122b['message']||_0x33122b)),_0x465db2['VlalT']($done);}}_0x523039();}