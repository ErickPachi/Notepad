/*The homepage needs to display the current list of notes stored in local storage.
The homepage will also need to have an Add Note button below the list to navigate the user to
the Add Note page. */
import React from 'react';
import Row from './Row';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';
import { Link } from 'react-router-dom';


//problem at home localS notes = 

function Home(props) {
	function onAddClick() {
			const new_note = {
				title: 'New Note',
				content: ''
			}
			props.addNote(new_note);
		}
	function renderNotes() {
		let items = [];

		for (let i = 0; i < props.notes.length; i++) {
			function onDelete() {
				let r = window.confirm("Are you sure you want to delete this note?");
				if (r === true) {
					props.deleteRow(i);
				}
			}
			function onIndex() {
				props.indexNote(i);
			}
			items.push(
				<Row index={i} value={props.notes[i]} onRowDelete={onDelete} getIndex={onIndex}/>
			);
		}
		return items;
	}

	return (
		<div className="page">
			<div className="subTitle"></div>
			<h3 className="subTitle2"></h3>
			<h3 className="subTitle3">Notes:</h3>
			<div>
				{renderNotes()}
			</div>
			<Link className='btnADD'>
				<AwesomeButton type="primary" onPress={onAddClick}>+ Note</AwesomeButton>
			</Link>
			<br /><br /><br /><br />
		</div>
	);
}

export default Home;