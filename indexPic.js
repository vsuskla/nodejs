var server=require("./serverPic");
var router=require("./routerPic");
var requestHandlers=require("./requestHandlersPic");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;

server.start(router.route,handle);
