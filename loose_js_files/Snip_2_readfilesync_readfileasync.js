/*read file sync and async*/

//1.) load module filesystem
var fs = require("fs");

//2.) filesystem reader:
//fs.readFileSync is a sync function
var data = fs.readFileSync('Snip_2_input.txt');

//3.) output data
console.log(data.toString());

//4.) print end message
console.log("Program Ended fs.readFileSync\n");

//5.) filesystem reader: 
//fs.readFile is an async function
//it reads first argument: Snip_2_input.txt
//it passes results to second argument: callback function(err,data){}
//results are either an error or the contents of the file
fs.readFile('Snip_2_input.txt', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
});

//6.) print end message
console.log("Program Ended fs.readFile(async with callback)\n");
