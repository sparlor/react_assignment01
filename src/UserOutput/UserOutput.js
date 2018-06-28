import React from 'react';
import './UserOutput.css';
import input from '../UserInput/UserInput'

const userOutput = (props) => {
    return (
        <div class = "UserOutput">
            <p>UserName: {props.userName}</p>
            <p>This is my first assignment</p>
        </div>
    )
};

export default userOutput;