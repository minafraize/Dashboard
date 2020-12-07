import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import * as actions from '../../store/actions/index';
import Spinner from '../../UI/spinner/spinner';
import Product from './product/product';
import ProductsHeader from '../../productsHeaders/productsHeaders';
import CheckoutBtn from '../../checkoutBtn/checkoutBtn';
import './products.css';

class Products extends Component {

    componentDidMount() {
        this.props.initProducts();
    }

    render() {
        
        // Map To Display Data
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.products.map(order => (
                <Product
                    key={order.id}
                    name={order.name}
                    img={order.img}
                    price={order.price} />
            ))
        }

        return (
            <div className='products'>
                <Container>
                    <ProductsHeader title='smoothies' />
                    {orders}
                    <CheckoutBtn />
                </Container>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        loading: state.loading
    }
}


const mapDispatchToProps = dispatch => {
    return {
        initProducts: () => dispatch(actions.initProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)


