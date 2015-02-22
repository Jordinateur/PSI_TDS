var Counter = React.createClass({

	getInitialState: function() {
		return {
			count: 0 
		};
	},
	componentDidMount: function() {
		var that = this;
		Store.bind('change', function(){
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
			<div>
				<div>{this.state.count}</div>
				<button onClick={Actions.increment}>INCR</button><button onClick={Actions.decrement}>DECR</button>
			</div>
		);
	}

});

React.render(
	<Counter />,document.body
);