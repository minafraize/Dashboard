import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/index';
import Notification from '../../Components/Notification/Notification';
import Card from '../../Components/UI/Card/Card';
import User from '../../assets/user.jpg';
import './Notifications.css';

const Notifications = (props) => {

    let notifications = <p>you don't have any notifications</p>
    if (props.notifications.length > 0) {
        notifications = props.notifications.map(noti => (
            <Notification
                key={noti.id}
                title={noti.title} />
        ))
    }

    return (
        <div className='notifications text-capitalize'>
            <div className="user-info">
                <ul className="list-unstyled m-0">
                    <li className="options">
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </li>
                    <li className="user-account d-flex">
                        <img className="rounded-circle" src={User} alt="User" />
                        <div className="user-email">
                            <h6 className="mb-0">anthony mike</h6>
                            <span>anthony2142@email.com</span>
                        </div>
                    </li>
                    <li className="notifications-icon" onClick={props.ToggleNotificationfun}>
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        <span className={[props.notifications.length ? "open noti-alert" : 'close-noti noti-alert'].join(' ')}></span>
                    </li>
                </ul>
            </div>
            <div className={[props.toggleNotification ? "open notifications-dropdown" : 'close-noti notifications-dropdown'].join(' ')}>
                <Card>
                    <h4 className="mb-4">notifications</h4>
                    <ul className="list-unstyled m-0">
                        {notifications}
                    </ul>
                </Card>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        notifications: state.ui.notifications,
        toggleNotification: state.ui.toggleNotification
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ToggleNotificationfun: () => dispatch(actions.toggleNotification())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
