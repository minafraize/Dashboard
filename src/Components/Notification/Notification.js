import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './Notification.css';

const Notification = (props) => {

    return (
        <li className="d-flex mb-2">
            <div className="success-icon"><FontAwesomeIcon className="icon" icon={faCheck} /> </div>
            <p className="user-email"> transfer link confirmed <span> by {props.title}</span></p>
        </li>
    )
}

export default Notification