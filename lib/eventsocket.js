var PACK = JSON.stringify;
var UNPACK = JSON.parse;
var slice = Array.prototype.slice;

function EventSocket(socket) {
	this._socket = socket;
}
EventSocket.prototype = {
	emit: function() {
		var args = slice.call(arguments, 0);
		this._socket.send(PACK(args));
	}
};

exports.EventSocket = EventSocket;