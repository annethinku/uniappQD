
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/my/my","pages/caddress/caddress","pages/searchCitys/searchCitys","pages/vip/vip","pages/vipMX/vipMX","pages/bbs/bbs","pages/articleDetail/articleDetail","pages/jubao/jubao","pages/messages/messages","pages/messageList/messageList","pages/tixian/tixian","pages/tixianRecords/tixianRecords","pages/tixianDetail/tixianDetail","pages/indexList/indexList","pages/live/live","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"奇豆","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"my-uni","compilerVersion":"2.5.1","entryPagePath":"pages/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/my","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/caddress/caddress","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/searchCitys/searchCitys","meta":{},"window":{"navigationBarTitleText":"城市定位","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/vip/vip","meta":{},"window":{"navigationBarTitleText":"奇豆会员","backgroundColor":"#454653","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#454653"}},{"path":"/pages/vipMX/vipMX","meta":{},"window":{"navigationBarTitleText":"会员成长详细"}},{"path":"/pages/bbs/bbs","meta":{},"window":{"navigationBarTitleText":"社区"}},{"path":"/pages/articleDetail/articleDetail","meta":{},"window":{"navigationBarTitleText":"文章详情","navigationStyle":"custom"}},{"path":"/pages/jubao/jubao","meta":{},"window":{"navigationBarTitleText":"举报"}},{"path":"/pages/messages/messages","meta":{},"window":{"navigationBarTitleText":"消息","disableScroll":true,"bounce":"none"}},{"path":"/pages/messageList/messageList","meta":{},"window":{"navigationBarTitleText":"消息记录"}},{"path":"/pages/tixian/tixian","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/tixianRecords/tixianRecords","meta":{},"window":{"navigationBarTitleText":"提现记录"}},{"path":"/pages/tixianDetail/tixianDetail","meta":{},"window":{"navigationBarTitleText":"佣金提现"}},{"path":"/pages/indexList/indexList","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/live/live","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
