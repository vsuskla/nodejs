var http=require("http");
var url=require("url");

function start(route, handle){
function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("req: " + request.url);
	console.log("Request for " + pathname + " received.");
	var content = route(handle, pathname);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Klaus sin server: " + content);
	response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}
exports.start=start;
