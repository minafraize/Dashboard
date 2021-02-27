import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions/index';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './LicenseKey.css';

const LicenseKey = (props) => {
    return (
        <div className='lic-key text-capitalize'>
            <Card>
                <ul className="list-unstyled d-flex">
                    <li>
                        license key
                        {props.toggleLicenseKey ? <span className="d-block">3652 - 6847 - 6325 - 9834</span>
                            : <span className="d-block">xxxx - xxxx - xxxx - xxxx</span>
                        }

                    </li>
                    <li className="lic-key-icon" onClick={props.ToggleLicenseKeyFun}>
                        <FontAwesomeIcon className="icon"
                            icon={props.toggleLicenseKey ? faEye : faEyeSlash} />
                    </li>
                </ul>
                <div>
                    <Button btnType="renew">
                        renew now
                        <strong className="ml-5">Stripe</strong>
                    </Button>
                    <Button btnType="default">deactive</Button>
                    <p className="mb-0 mt-2"> next renew on <b>22 mars 2021</b></p>
                </div>
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toggleLicenseKey: state.ui.toggleLicenseKey,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        ToggleLicenseKeyFun: () => dispatch(actions.toggleLicenseKey())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseKey)
