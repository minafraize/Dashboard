import React from 'react';
import {connect} from 'react-redux';

import './product.css';

const product = (props) => {
    
    let classes = ['list-unstyled', 'product-cont', 'open'];
    if (props.toggle) {
        classes = ['list-unstyled', 'product-cont', 'close']
    }
    return (
        <ul className={classes.join(' ')}>
            <li> <img className="mr-3" src={props.img} alt='img' /> </li>
            <li className='mt-4 mb-2'> <h4>{props.name}</h4> </li>
            <li className='mb-2'> <span className="d-block"> {props.price + '$'} </span> </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        toggle: state.toggle
    }
}

export default connect(mapStateToProps)(product)
