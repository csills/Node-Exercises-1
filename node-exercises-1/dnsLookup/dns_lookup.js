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