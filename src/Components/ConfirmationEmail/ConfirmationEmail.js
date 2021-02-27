import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './ConfirmationEmail.css';

const ConfirmationEmail = (props) => {

    return (
        <ul className="list-unstyled Confirmation m-0 text-center">
            <li className="done-icon"> <FontAwesomeIcon className="icon" icon={faCheckCircle} /> </li>
            <li className="mb-3"> <h4>confirmation email sent</h4> </li>
            <li className="confirm-sent mb-4">we sent a link to <span>{props.email}</span>. check the email to confrim the transfer </li>
            <li className="check-confirm mb-2">don't get a confirmation email?</li>
            <li className="options">check your spam or <span onClick={() => props.again()}>send again</span> </li>
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        email: state.ui.email,
    }
}

export default connect(mapStateToProps)(ConfirmationEmail)
