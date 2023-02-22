const os = require('os');

console.log('Operating system: ', os.type());
console.log('Release: ', os.release());
console.log('CPU Architecture: ', os.arch());
console.log('Total Memory: ', os.totalmem()/ 1024/ 1024, 'MB');
console.log('Free Memory: ', os.freemem()/1024/1024, 'MB');
console.log('Uptime: ', os.uptime(), 'seconds');