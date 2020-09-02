import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';
import AddN from './AddN';
import Error from './Error';

function Routes(Props) {
    return (
        <Switch>
            <Route path="/Notepad" exact><Home indexNote={Props.defineIndex} notes={Props.notes} deleteRow={Props.deleteNote} addNote={Props.addNote}/></Route>

            <Route path="/Notepad/Editor" exact render={props => localStorage.getItem('notes') !== null ? (<Editor saveChanges={Props.edSave} note={Props.noteItem} props />) : (<Redirect to={{ pathname: "/Notepad" }} />
            )
            } />
            <Route path="/Notepad/AddN"><AddN addNote={Props.addNote} /></Route>
            <Route><Error /></Route>
        </Switch>
    );
}

export default Routes;
