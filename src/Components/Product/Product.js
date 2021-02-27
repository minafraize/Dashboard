import React from 'react';

import './Product.css';

const Product = (props) => {

    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.name}</td>
            <td>{props.size}</td>
            <td>{props.website}</td>
            <td>{props.price}</td>
            <td><span className={props.status === 'success' ? 'success' : 'fail'}>{props.status}</span></td>
        </tr>
    )
}

export default Product