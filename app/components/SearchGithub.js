import React from 'react';

class SearchGithub extends React.Component{
	handleSubmit(){
		var router = this.context.router;
		var username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode().value = '';
		router.transitionTo('profile', {username: username});
	}
	render(){
		return(
			<div className="navbar">
				<div>
					<input type="text" className="form-control" ref="username" />
				</div>
				<div>
					<button type="button" className="search-btn" onClick={this.handleSubmit.bind(this)}>Search Github</button>
				</div>
			</div>
		)
	}
};

SearchGithub.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default SearchGithub;