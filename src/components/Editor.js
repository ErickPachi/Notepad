/*The Edit Note page will need to have a form that allows a user to edit a note.
The user can edit the ‘title’ and ‘content’ property of a note.
There needs to be a Save Note button that submits the form and updates the note. The user
should also be navigated back to the previous page when submitting the form*/

import React, { useState } from 'react';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';
import { Link } from 'react-router-dom';

function Editor(props) {
	
	let oldTitle = props.note.title;
	let oldContent = props.note.content;

	const [title, setTitle] = useState(oldTitle);
	const [content, setContent] = useState(oldContent);


	function onTitleChange(event) {
		setTitle(event.target.value);
	}
	function onContentChange(event) {
		setContent(event.target.value);
	}

	function onSaveClick() {
		let valueT = title.trim();
		if (valueT) {
			const new_note = {
				title: title,
				content: content
			}
			props.saveChanges(new_note);
			setTitle(null);
			setContent(null);
		}
		else {
			alert("Sorry, You can't save a note without an title");
		}
	}
	return (
		<div className="page">
			<div className="subTitle"></div>
			<h3 className="subTitle2"></h3>
			<h3 className="subTitle3">Editor</h3>

			<form className="editor_form">
				<Link to={(title === null) ? "/Notepad/" : "/Notepad/Editor"} className='btnCreate' >
					<AwesomeButton type="secondary" onPress={onSaveClick}>Save</AwesomeButton>
				</Link>
				<br />
				<input id="titleInput" className="titleBox" placeholder="Title" value={title} onChange={onTitleChange} type='text' autoFocus="true" />
				<br />
				<br />
				<textarea className='txtBox' placeholder="Content..." rows='20' value={content} onChange={onContentChange} />
			</form>
		</div>
	);
}
export default Editor;

