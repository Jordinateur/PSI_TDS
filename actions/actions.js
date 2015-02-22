var Actions = {
	increment: function(){
		console.log('Actions increment');
		MyDispatcher.Dispatch({
			actionType: Constants.INCREMENT
		});
	}
}