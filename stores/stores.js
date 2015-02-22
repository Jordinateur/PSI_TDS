var Store = {
	i: 0,
	increment: function(){
		this.i++;		
	},
	decrement: function(){
		this.i--;
	},
	getCount: function(){
		return this.i;
	}
}
MicroEvent.mixin(Store);
MyDispatcher.Register(function (action){
	switch(action.actionType) {
		case Constants.INCREMENT:
			Store.increment();
			Store.trigger('change', function(){
				
			});
		break;

		case Constants.DECREMENT:
			Store.decrement();
			Store.trigger('change', function(){
				
			});
		break;

	}
});