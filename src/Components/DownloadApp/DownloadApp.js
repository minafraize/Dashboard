import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './DownloadApp.css';

const DownloadApp = () => {
    return (
        <div className='download-app text-capitalize'>
            <Card>
                <ul className="list-unstyled d-flex m-0">
                    <li className="download-icon mr-4">
                        <FontAwesomeIcon className="icon" icon={faDesktop} />
                        <span className="d-block">desktop app</span>
                    </li>
                    <li className="download-btns">
                        <Button btnType="download">
                            <FontAwesomeIcon className="icon mr-2" icon={faAppleAlt} />
                            download for macOS
                        </Button>
                        <Button btnType="download">
                            <FontAwesomeIcon className="icon mr-2" icon={faWindowRestore} />
                            download for windows
                        </Button>
                    </li>
                </ul>
            </Card>
        </div>
    );
}

export default DownloadApp
