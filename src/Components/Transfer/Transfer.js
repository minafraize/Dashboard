import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import './Transfer.css';

const Transfer = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [checktoggle, setCheckToggle] = useState(false);

    // Show Confirmation Modal
    const toggleModals = () => {
        setModalShow(false)
        setCheckToggle(false)
    }

    // Back To Transfer Modal
    const sendAgain = () => {
        setModalShow(true)
        setCheckToggle(false)
    }
    return (
        <div className='transfer text-capitalize'>
            <Card>
                <ul className="list-unstyled d-flex m-0">
                    <li>
                        <FontAwesomeIcon className="icon mr-3" icon={faShareSquare} />
                        <span>transform</span>
                        <em className="d-block mt-3">current email</em>
                        <p className="mb-0"> {props.email === '' ? "anthony2142@email.com" : props.email} </p>
                    </li>
                    <li onClick={() => setModalShow(true)}>
                        <Button btnType="transfer">
                            transform
                                <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
                        </Button>
                    </li>
                </ul>
            </Card>
            <Modal show={modalShow}
                onHide={toggleModals}
                checktoggle={() => setCheckToggle(true)}
                switchcomp={checktoggle}
                again={sendAgain} />
        </div>
    );

}

const mapStateToProps = state => {
    return {
        email: state.ui.email,
    }
}

export default connect(mapStateToProps)(Transfer)
