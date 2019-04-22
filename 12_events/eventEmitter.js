var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Called test_test');
}

//Assign the event handler to an event:
eventEmitter.on('test_test', myEventHandler);

//Fire the 'test_test' event:
eventEmitter.emit('test_test');