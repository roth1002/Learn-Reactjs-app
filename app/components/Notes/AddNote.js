import React from 'react';

class AddNote extends React.Component{
	handleSubmit(){
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	}
	render(){
		return(
			<div className="input-group">
				<input type="text" className="form-control" ref="note" placeholder="Add New Note" />
				<span className="input-group-btn">
					<button className="add-note-btn" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
				</span>
			</div>
		)
	}
};

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default AddNote;