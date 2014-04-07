var formidable=("formidable"),
		http=require("http"),
		url=require("url");

http.createServer(function(req, res){
	if (req.url == "/upload" && req.method.toLowerCase() == "post") {
		var form = new formidable.IncomingForm();
		form.parse(req, function(error, fields, files)) {
			res.writeHead(200, {"content-type":"text/plain"});
			res.write("recived upload:\n\n");
			res.end(sys.inspect({fields: fields, files: files}))
		});
		return;
	}
	
})

exports.start=start;
