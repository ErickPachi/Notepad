import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/src/styles/themes/theme-blue';
import { Link } from 'react-router-dom';


function Error() {
    return (

        <div className='page Error_P'>
            <div className="Error_M">
                <h1>Error 404</h1>
                <p>Sorry, The Page that you are trying to reach does NOT excist</p>
            </div>
            <Link to="/" className='Error_btn'>
                <AwesomeButton type="secondary">Goback to Home</AwesomeButton>
            </Link>
        </div>

    );
}

export default Error;