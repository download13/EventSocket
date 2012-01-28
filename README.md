EventSocket
===========

A (very) simply event emitter that works over WebSockets.

### Server Example:
```javascript
var EventSocket = require('eventsocket').EventSocket;

var ws; // Pretend this is a WebSocket object connected to a client
var evt = new EventSocket(ws);

evt.emit('chatmsg', 'HOW ABOUT A NICE GAME OF CHESS');
```

### Client Example:
```javascript
var ws; // Keep pretending
var emitter = new EventSocket(ws);
emitter.on('chatmsg', function(message) {
	// Do something here
});
```