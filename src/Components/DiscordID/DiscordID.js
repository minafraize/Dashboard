import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './DiscordID.css';

const DiscordID = () => {
    return (
        <div className='discord text-capitalize'>
            <Card>
                <ul className="list-unstyled d-flex m-0">
                    <li>
                        <FontAwesomeIcon className="icon mr-3" icon={faSmileBeam} />
                        <span>Discord ID</span>
                        <p className="mb-0 mt-2">anthony#2142</p>
                    </li>
                    <li>
                        <Button btnType="default">unbind</Button>
                    </li>
                </ul>
            </Card>
        </div>
    );
}

export default DiscordID
