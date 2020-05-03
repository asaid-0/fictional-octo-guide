const client = require('./helpers/client');
const server = require('./helpers/server');

const students = [
    {
    name: "First student",
    age: 27,
    courses: ['arabic', 'math', 'english'],
    married: false
    },
    {
    name: "Second student",
    age: 24,
    courses: ['math', 'english', 'french'],
    married: false
    },
    {
    name: "Third student",
    age: 25,
    courses: ['math', 'english', 'french'],
    married: false
    }
]

server(students, 'helpers/service.wsdl');
console.log("===== SERVER IS RUNNING helpers/server.js ======\n\n");

console.log("===== TESTING WITH CLIENT helpers/client.js ======");
client();

console.log("===== WELL DONE ======");
