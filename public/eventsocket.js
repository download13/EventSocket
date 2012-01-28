(function(global) {
	var slice = Array.prototype.slice;
	var UNPACK = JSON.parse;
	
	function EventSocket(socket) {
		socket.onmessage = this._onmessage.bind(this);
		this._socket = socket;
		this._handlers = {};
	}
	EventSocket.prototype = {
		_onmessage: function(message) {
			message = UNPACK(message);
			this.emit.apply(message);
		},
		
		on: function(type, listener) {
			if(!this._handlers[type]) this._handlers[type] = [];
			
			this._handlers[type].push(listener);
		},
		emit: function(type) {
			if(!this._handlers[type]) this._handlers[type] = [];
			
			var args = slice.call(arguments, 1);
			var listeners = this._handlers[type];
			if(listeners == null) return;
			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(this, args);
			}
		},
		removeListener: function(type, listener) {
			if(this._handlers[type] == null) return;
			
			var listeners = this._handlers[type];
			var pos = listeners.indexOf(listener);
			if(pos == -1) return;
			delete this._handlers[type][pos];
		}
	};
	
	global.EventSocket = EventSocket;
})(this);