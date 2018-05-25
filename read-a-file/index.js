// This is where you require the npm package modules
// That will be necessary to make your program work

const fs = require('fs');
const readline = require('readline');

// below is a standard way of creating an interface
// between user input and the terminal/backend
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('file:', (filename) => {
    console.log(filename);
})