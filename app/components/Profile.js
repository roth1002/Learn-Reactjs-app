import React from 'react';
import UserProfile from './Github/UserProfiles';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import Firebase from 'firebase';
import helpers from '../utils/helpers';
import Rebase from 're-base';
import '../../less/components/Profile.less';

var base = Rebase.createClass('https://github-note-taker.firebaseio.com/');

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			notes: [],
			bio: {},
			repos: []
		};
	}
	init(){
		this.ref = base.bindToState(this.router.getCurrentParams().username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

  		helpers.getGithubInfo(this.router.getCurrentParams().username)
  			.then((dataObj) => {
  				this.setState({
  					bio: dataObj.bio,
  					repos: dataObj.repos
  				});
  			});
	}
	componentWillMount(){
		this.router = this.context.router;
	}
	componentDidMount(){
		this.init();
	}
	componentWillUnmunt(){
		base.removeBinding(this.ref);
	}
	componentWillReceiveProps(){
		base.removeBinding(this.ref);
		this.init();
	}
	handleAddNote(newNote){
		base.post(this.router.getCurrentParams().username, {
			data: this.state.notes.concat([newNote])
		});
	}
	render(){
		var username = this.router.getCurrentParams().username;
		return(
			<div className="info-block">
				<div className="info-item-block">
					<UserProfile username={username} bio={this.state.bio}/>
				</div>
				<div className="info-item-block">
					<Repos username={username} repos={this.state.repos}/>
				</div>
				<div className="info-item-block">
					<Notes
						username={username}
						notes={this.state.notes}
						addNote={this.handleAddNote.bind(this)} />
				</div>
			</div>
		)
	}
};

Profile.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default Profile;