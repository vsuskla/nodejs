var server=require("./serverPic");
var router=require("./routerPic");
var requestHandlers=require("./requestHandlersPic");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;

server.start(router.route,handle);
