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

rl.question('What is the filename:', (filename) => {
    rl.close();

    fs.readFile(filename, 'utf8', (err, data) => { 
    // (err,data) = standard way of passing data around from function to function.
    // this way if there is an error, you can handle it right away.
    // filename is passed into the variable "data"
        if (err) {
            console.log('error: ' + err);
            return; //return will stop the execution of the file due to the error. 
        }
        console.log(data.toUpperCase());
    })
});