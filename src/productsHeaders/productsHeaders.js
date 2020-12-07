import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions/index';
import './productsHeaders.css';

const ProductsHeaders = (props) => {

    return (
        <div className="products-header">
        <h2 onClick={props.toggleMenu} className="mb-5 text-left">
            {props.title}
        <i className="fas fa-chevron-down"></i>
        </h2>
    </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: () => dispatch(actions.ToggleMenu())
    }
}

export default connect(null, mapDispatchToProps)(ProductsHeaders)

