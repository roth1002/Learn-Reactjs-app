import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Router, Route, DefaultRoute } from 'react-router';


export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		// when the url is "/", this will be active
		<DefaultRoute handler={Home} />
	</Route>
);
