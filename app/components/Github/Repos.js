var React = require('react');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isrequired,
		repos: React.PropTypes.array.isrequired
	},
	render: function(){
		return (
			<div> REPOSSS <br />
				Username: {this.props.username} <br />
				Repos: {this.props.repos}
			</div>
		)
	}
});

module.exports=Repos;