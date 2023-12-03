// Create web server
//create a route for /comments
//send back some dummy data

import { createServer } from 'http';
import { createReadStream } from 'fs';

var server = createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = createReadStream(__dirname + '/comments.json', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, "localhost");
