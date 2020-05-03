const soap = require('soap');
const http = require('http');

const myserver = (data, wsdl) => {
  const myService = {
    StudentService: {
      StudentServiceSoap: {
        GetStudent: function(args, callback) {
                callback(data);
            },
      }
    }
  };



const xml = require('fs').readFileSync(wsdl,'utf8');
const server = http.createServer(function(request,response) {
response.end("404: Not Found: " + request.url);
});

server.listen(8000);
soap.listen(server,'/wsdl',myService, xml);

}


module.exports = myserver;