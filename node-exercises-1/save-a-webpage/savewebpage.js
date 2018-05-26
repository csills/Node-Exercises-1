const fs = require('fs');
const readline = require('readline');
const http = require('http');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the URL: ', (url) => {
    rl.question('What is the Output filename: ', (outputFilename) => {
        rl.close();


        //use the Node.js HTTP modules to handle URL data
        //http.get(options[,callback]) = asynchronous method
        //gets the URL and passes it into a callback function
        //it also sets the method to GET and calls req.end() automatically
        //The callback is invoked with a single argument that is an instance of http.IncomingMessage
        http.get(url, (response) => {
            let outputData = '';
            response.on('data', (data) => {
                outputData += data;
            })
            response.on('end', () => {
                fs.writeFile(outputFilename, outputData, (outputErr) => {
                    if (outputErr) { return console.log(outputErr); }
                    return console.log('Wrote ' + url + ' to ' + outputFilename + ' .');
                })
            })
        })
    })    
});