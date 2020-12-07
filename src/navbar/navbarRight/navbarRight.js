import React from 'react';
import { Col } from 'react-bootstrap';


import './navbarRight.css';

const NavRight = () => {

    return (
        <Col sm={6}>
            <div className="basket text-right">
                <i className="fas fa-exclamation-circle help ml-5"></i>
                <div className="shopping-bag-number">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="d-block text-center rounded-circle">2</span>
                </div>
            </div>
        </Col>
    )
}

export default NavRight

