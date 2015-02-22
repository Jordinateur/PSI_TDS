var Counter = React.createClass({

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
			<div>
				<div>{this.state.count}</div>
				<button onClick={Actions.increment}>INCR</button>
			</div>
		);
	}

});

React.render(
	<Counter />,document.body
);