import React from 'react';
import { Button } from 'react-bootstrap';

import './checkoutBtn.css';

const CheckoutBtn = () => {

    return (
        <div className="check-btn mt-5">
            <Button>
                Check my orders
                <span>8.0sar</span>
            </Button>
        </div>
    )
}

export default CheckoutBtn
