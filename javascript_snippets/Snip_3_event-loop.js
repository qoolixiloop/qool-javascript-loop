/*shows node's oberver pattern*/
//source: https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm

// 1.) Import events module
var events = require('events');

// 2.) Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// 3.1) Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection successful.');
  
   // 4.1) Fire the data_received event 
   eventEmitter.emit('data_received');
}

// 3.) Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// 4.) Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received successfully.');
});

// 3.2) Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");
