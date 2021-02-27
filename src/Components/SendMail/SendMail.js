import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './SendMail.css';

const SendMail = (props) => {

    const [itemValue, setItemValue] = useState('');

    const handleSubmit = ev => {
        ev.preventDefault();

        // Switch To Confirmation Modal
        props.checktoggle();

        // Execute Transfer Mail Fun
        props.transferMail(itemValue);

        // Reset value
        setItemValue('');
    };

    const handleItemChange = ev => setItemValue(ev.target.value);

    return (
        <div className="send-email">
            <form onSubmit={handleSubmit}>
                <label className="font-weight-lighter">transfer to</label>
                <input
                    type="email"
                    className="form-control email-inpt"
                    id="new-todo-item"
                    name="new-todo-item"
                    placeholder="Enter the email address..."
                    value={itemValue}
                    onChange={handleItemChange}
                    autoFocus
                    required
                />
                <input type="submit" className="send text-capitalize" value="send" />
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        transferMail: (itemValue) => dispatch(actions.transferMail(itemValue)),
    }
}

export default connect(null, mapDispatchToProps)(SendMail)
