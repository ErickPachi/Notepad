import React from 'react';
import { removeSessionItem } from './services/storage'; 
import { Switch, Route, useHistory } from 'react-router-dom';
import '../App.css';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';
import { Link } from 'react-router-dom';

function Header(props) {
    const history = useHistory();

    function onBack() {
        history.goBack();
        removeSessionItem('title');
        removeSessionItem('content');
    }

    function deleteAll() {
        let r = window.confirm("Are you sure you want to delete All?");
        if (r === true) {
            props.deleteALLNote();
        }
    }
    return (
<>
<header className="App-header">
                <Link to="/Notepad/" className="logo"><span>NOTEPAD</span></Link>
    <div>
                    <Link to="/Notepad/" className="btn">
                        <AwesomeButton type="primary">Home</AwesomeButton>
        </Link>
                    <Link to="/Notepad/AddN" className="btn">
                        <AwesomeButton type="primary">New Note</AwesomeButton>
        </Link>


        <Switch>
                        <Route exact path="/Notepad">
                <span className='btnBack'>
                    <AwesomeButton type="secondary" onPress={deleteAll}>Clear All</AwesomeButton>
                </span>
            </Route>
                        <Route path="/AddN" exact>
                <span className='btnDelete btn-Clear'>
                    <AwesomeButton type="secondary" onPress={onBack}>Cancel</AwesomeButton>
                </span>
                </Route>
                        <Route path="/Editor" exact>
                <span className='btnDelete btn-Clear'>
                    <AwesomeButton type="secondary" onPress={onBack}>Cancel</AwesomeButton>
                </span>
            </Route>
        </Switch>
    </div>

</header>
</>
  );
}
export default Header;
