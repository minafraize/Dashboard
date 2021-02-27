import React from 'react';

import'./Button.css';

const Button = (props) => (
    <button className={["button", props.btnType].join(' ')}>
        {props.children}
    </button>
);

export default Button;