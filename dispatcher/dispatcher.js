var Dispatcher = function(){
	_RegisteredList = [];
}

Dispatcher.prototype.Register = function(callback) {
	_RegisteredList.push(callback);
};

Dispatcher.prototype.Dispatch = function(playload) {
	for (var i = 0; i < _RegisteredList.length; i++) {
		_RegisteredList[i].call(_RegisteredList[i],playload);
	};
};

var MyDispatcher = new Dispatcher();