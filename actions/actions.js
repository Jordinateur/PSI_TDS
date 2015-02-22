var Actions = {
	increment: function(){
		MyDispatcher.Dispatch({
			actionType: Constants.INCREMENT
		});
	},
	decrement: function(){
		MyDispatcher.Dispatch({
			actionType: Constants.DECREMENT
		});
	}
}