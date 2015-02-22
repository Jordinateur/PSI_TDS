var Counter = React.createClass({displayName: "Counter",

	getInitialState: function() {
		return {
			count: 0 
		};
	},
	componentDidMount: function() {
		var that = this;
		console.log('componentDidMount');
		Store.bind('change', function(){
			console.log('MicroEvent bind');
			that.updateCount();
			
		});	
	},
	componentWillMount: function() {
		Store.unbind('change');
	},
	updateCount: function(){
		this.setState({
			count: Store.getCount() 
		});
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("div", null, this.state.count), 
				React.createElement("button", {onClick: Actions.increment}, "INCR")
			)
		);
	}

});

React.render(
	React.createElement(Counter, null),document.body
);