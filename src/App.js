import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Notifications from './container/Notifications/Notifications'
import ProductsDetail from  './Components/ProductsDetail/ProductsDetail';
import UserDetail from './Components/UserDetail/UserDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Notifications />
        <Row>
          <Col lg="8">
            <ProductsDetail />
          </Col>
          <Col lg="4">
            <UserDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
