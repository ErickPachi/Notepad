import React, { useState } from 'react';
import { getItem, setItem, removeItem, removeSessionItem} from './components/services/storage';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';

//onPress

function App() {
    const [notes, setNotes] = useState(getItem('notes')||[]);
    const [noteIndex, setNoteIndex] = useState(getItem('index')||0);


    //add new note
    function addNote(note) {
        let new_Array = Array.from(notes);
        new_Array.push(note);
        setNotes(new_Array);
        setItem('notes', new_Array);
    }

    //get index
    function onIndex(index) {
        setNoteIndex(index);
        setItem('index', index);
    }

    //edit
    function editorSave(note) {
        let new_Array = Array.from(notes);
        new_Array[noteIndex] = note;
        setNotes(new_Array);
        setItem('notes', new_Array);
    }

    

    //delete note
    function ondeleteNote(index) {
            let new_Array = Array.from(notes);
            new_Array.splice(index, 1);
        setNotes(new_Array);
        setItem('notes', new_Array);
    }

    //delete ALL note
    function deleteALLNote() {
        let new_Array = [];
        setNotes(new_Array);
        removeItem('notes');
        localStorage.clear();
    }

  return (
      <div className="App">
          <Header deleteALLNote={deleteALLNote}/>
          <Routes defineIndex={onIndex} edSave={editorSave} notes={notes} noteItem={notes[noteIndex]} addNote={addNote} deleteNote={ondeleteNote} />
          <footer className="App-footer">TAFE NSW. DIPS1, React Project 1. Made by: Erick da Fonseca Pachi</footer>
    </div>
  );
}

export default App;
