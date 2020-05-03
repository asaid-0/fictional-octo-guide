const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';

module.exports = () => soap.createClient(url, {disableCache: true} ,function(err,client) {
  client.GetStudent(function(err, result) {
    console.log(result);
    console.log(client.describe());
  });
});