const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// You can nest one questions inside of another like so:
rl.question('What is the Input filename:', (inputFilename) => {
    rl.question('What is the Output filename: ', (outputFilename) => {
        rl.close();

        fs.readFile(inputFilename, 'utf8', (inputErr, inputData) => { 
            // (err,data) = standard way of passing data around from function to function.
            // this way if there is an error, you can handle it right away.
            // filename is passed into the variable "data"
                if (inputErr) {
                    console.log('error: ' + inputErr);
                    return; //return will stop the execution of the file due to the error. 
                }
                // a shorter way to code the above error is:
                // if (err) { return console.log(err); }

                console.log('Input file: ' + inputFilename);
                console.log('Output file: ' + outputFilename);
                
                let outputData = inputData.toUpperCase();
                fs.writeFile(outputFilename, outputData, (outputErr) => {
                    if (outputErr) { return console.log(outputErr); }
                    return console.log('Wrote to file ' + outputFilename);
                })
        })
    })    
});