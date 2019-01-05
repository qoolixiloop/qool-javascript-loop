/*shows node's oberver pattern*/

// 1.) Import events module
var events = require('events');

// 2.) Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// 3.1) Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // 4.1) Fire the data_received event 
   eventEmitter.emit('data_received');
}

// 3.) Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// 4.) Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// 3.2) Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");
