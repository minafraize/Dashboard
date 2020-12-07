import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';

import './navbar.css';
import NavLeft from './navbarLeft/navbarLeft';
import NavRight from './navbarRight/navbarRight';

const product = () => {

    return (
        <Nav>
            <Container>
                <Row>
                    <NavLeft />
                    <NavRight />
                </Row>
            </Container>
        </Nav>
    )
}

export default product

