import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card/Card'
import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets text-capitalize">
            <Row>
                <Col md="6">
                    <Card>
                        <div className="checkout widget">
                            <ul className="list-unstyled d-flex m-0">
                                <li className="checkout-det">
                                    <h5>total checkouts</h5>
                                    <p className="m-0">
                                        <span>72</span> / 82
                                </p>
                                </li>
                                <li className="icon-cont text-center">
                                    <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <div className="failure widget">
                            <ul className="list-unstyled d-flex m-0">
                                <li className="failure-det">
                                    <h5>total failure</h5>
                                    <p className="m-0">
                                        <span>10</span> / 82
                                </p>
                                </li>
                                <li className="icon-cont text-center">
                                    <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Widgets;
