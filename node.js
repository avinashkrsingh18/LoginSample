
var fs=require("fs");


var data = 'Avinash';

// Create a readable stream
var read = fs.createWriteStream('input.txt');

// Set the encoding to be utf8.
read.write(data,'UTF8');

read.end();

// Handle stream events --> data, end, and error

read.on('finish',function(){
console.log('Completed');
});

read.on('error',function(err){

console.log(err.stack);
});


console.log("Executed");