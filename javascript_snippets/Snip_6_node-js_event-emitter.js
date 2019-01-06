//source: https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 1.a)define listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// 1.b)define listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// 2.a)Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// 2.b)Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

// 3.)
var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// 4.a) Fire the connection event 
eventEmitter.emit('connection');

// 5.a) Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// 6.b) Fire the connection event 
eventEmitter.emit('connection');

// 7.) Count events on event connection
eventListeners = require('events').
  EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// 8.) Bye
console.log("Program Ended.");
