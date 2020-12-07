import React from 'react';
import { Col } from 'react-bootstrap';


import './navbarLeft.css';
import Logo from '../../assets/logo.png'

const NavLeft = () => {

    return (
        <Col sm={6}>
            <div className="logo-cont text-left">
                <div className="logo">
                    <img src={Logo} alt='Mcdonalds' />
                    <div className="online"></div>
                </div>
                <div className="site-name">
                    <h5 className="mb-0 mt-2">McDonald's</h5>
                    <p className="m-0">Al Harma</p>
                </div>
            </div>
        </Col>
    )
}

export default NavLeft

