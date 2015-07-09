import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';
import '../../less/components/Main.less';

class Main extends React.Component{
	render(){
		return (
			<div className="main-container">
				<nav role="navigation">
					<SearchGithub />
				</nav>
				<div className="container">
					<RouteHandler {...this.props}/>
				</div>
			</div>
		)
	}
};

export default  Main;