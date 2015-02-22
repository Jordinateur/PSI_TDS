var Store = {
	i: 0,
	increment: function(){
		console.log('Store increment');
		this.i++;
		
	},
	getCount: function(){
		return this.i;
	}
}
MicroEvent.mixin(Store);
MyDispatcher.Register(function (action){
	switch(action.actionType) {
		case Constants.INCREMENT:
			console.log('Dispatcher Register', action);
			Store.increment();
			Store.trigger('change', function(){
				console.log('change triggered');
			});
		break;

	}
});