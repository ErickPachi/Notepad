/*Create a functional component called Row.
Each row in the list on the homepage needs to use a Row component to display the note title and
a delete button.
When delete is clicked the current note is removed from the list of notes.
When a row is clicked the user is sent to the Edit Note page.*/import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';

function Row(props) {

	return (
		<div className="Note_Row" key={"note" + props.index}>
			<div className='title'>{props.value.title}</div>

			<Link to="/Notepad/Editor" className='btnEdit'>
				<AwesomeButton key={"btnEdit" + props.index} type="primary" onPress={props.getIndex}>Edit</AwesomeButton></Link>
			
			<Link className='btnDelete'>
				<AwesomeButton key={"BtnDelete" + props.index} type="secondary" onPress={props.onRowDelete}>Delete</AwesomeButton></Link>
			<br />
		</div>
		
	);
}

export default Row;
