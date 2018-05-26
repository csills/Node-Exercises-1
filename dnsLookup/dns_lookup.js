const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the Domain Name:', (domain) => {
    rl.close();
    console.log('Domain Name: ' + domain);

    dns.lookup(domain, (err, address) => {
        if (err) {
            console.log('error: ' + err);
            return; //return will stop the execution of the file due to the error. 
        }
        console.log('IP Address: ' + address);
      });

});

/* This same problem can be solved using node.js util package
   which contains a promisify function. The following code uses promisify:

    const dns = require('dns');
    const readline = require('readline');
    const util = require('util');


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const lookup = util.promisify(dns.lookup);
    

    rl.question('What is the Domain Name:', (domain) => {
        rl.close();

        lookup(domain)
            .then((address) => {
                console.log('IP Address: ' + address);
            })
            .catch((err) => {
                return console.log(err)
            })
            
    });
    */
