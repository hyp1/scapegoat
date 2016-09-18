var http = require("http");
var ssr = require("done-ssr");
var render = ssr();

var server = http.createServer(function(request, response){
    console.log("rendering...");
    console.log(request);
	render(request).pipe(response);
});

server.listen(8080);
