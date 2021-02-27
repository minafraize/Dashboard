import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalTitle, ModalFooter, Button } from 'react-bootstrap';

import SendMail from '../../SendMail/SendMail';
import ConfirmationEmail from '../../ConfirmationEmail/ConfirmationEmail';
import './Modal.css';


const PopUp = (props) => {

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <ModalTitle id="contained-modal-title-vcenter">
                        {!props.switchcomp ? "transfer" : null}
                    </ModalTitle>
                </Modal.Header>
                <ModalBody>
                    {props.switchcomp ? <ConfirmationEmail again={props.again} /> : <SendMail checktoggle={props.checktoggle} />}
                </ModalBody>
                {!props.switchcomp ?
                    <ModalFooter>
                        <Button onClick={props.onHide}>Close</Button>
                    </ModalFooter>
                    : null}
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    return {
        notifications: state.ui.notifications,
    }
}

export default connect(mapStateToProps)(PopUp)
