/*The Add Note page will need to have a form that allows a user to add a note.
A note will have a ‘title’ and a ‘content’ property.
Title will be a regular input and content will be a textarea.
The form data will need to be stored using session storage.
There needs to be an Add Note button that submits the form and adds a new note will the form
data. The form data should also be cleared from session storage on click. The user should also be
navigated back to the previous page when submitting the form.*/import React, { useState } from 'react';
import { getSessionItem, setSessionItem, removeSessionItem } from './services/storage';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';
import { Link } from 'react-router-dom';

function AddN(props) {
	const [title, setTitle] = useState(getSessionItem('title')||'');
	const [content, setContent] = useState(getSessionItem('content')||'');


	function onTitleChange(event) {
		setTitle(event.target.value);
		setSessionItem('title', event.target.value);
	}
	function onContentChange(event) {
		setContent(event.target.value);
		setSessionItem('content', event.target.value);
	}

	function onAddClick() {
		let valueT = title.trim();
		if (valueT) {
			const new_note = {
					title: title,
					content: content
			}
			props.addNote(new_note);
			setTitle(null);
			setContent(null);
			removeSessionItem('title');
			removeSessionItem('content');
		}
		else {
			alert("Sorry, You can't save a note without an title");
		}
	}

	return (
		<div className="page">
			<div className="subTitle"></div>
			<h3 className="subTitle2"></h3>
			<h3 className="subTitle3 NN">New Note</h3>

			<form className="editor_form">
				<Link to={(title === null) ? "/Notepad" : "/AddN"} className='btnCreate' >
					<AwesomeButton type="secondary" onPress={onAddClick} >Create</AwesomeButton>
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

export default AddN;
