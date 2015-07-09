import React from 'react';
import '../../../less/components/Note.less';

class NotesList extends React.Component{
	showBtn(index){
		this.refs['deleteBtn' + index].getDOMNode().className = "delete-note-btn";
	}
	hideBtn(index){
		this.refs['deleteBtn' + index].getDOMNode().className = "delete-note-btn hidden";
	}
	handleDelete(index){
		this.props.deleteNote(index);
	}
	render(){
		var notes = this.props.notes.map((note, index) => {
			return  <li className="note-item"
						onMouseEnter={this.showBtn.bind(this, index)}
						onMouseLeave={this.hideBtn.bind(this, index)}>
						<div className="note-text-block"> {note} </div>
						<div className="note-btn-block">
							<button className="delete-note-btn hidden" ref={"deleteBtn" + index} onClick={this.handleDelete.bind(this, index)}> X </button>
						</div>
				    </li>
		});

		return(
			<ul className="list-group">
				{notes}
			</ul>
		)
	}
};

NotesList.propTypes = {
	notes: React.PropTypes.array.isRequired,
	deleteNote: React.PropTypes.func.isRequired
};

export default NotesList;