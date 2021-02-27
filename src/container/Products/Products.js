import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import * as actions from '../../store/actions/index';
import Product from '../../Components/Product/Product';
import Spinner from '../../Components/UI/Spinner/Spinner'
import './Products.css';

class Products extends Component {

    componentDidMount() {
        this.props.initProducts();
    }

    render() {

        // Display The Products
        let products = <Spinner />
        if (!this.props.loading) {
            products = this.props.products.map(pro => (
                <Product
                    key={pro.id}
                    date={pro.date}
                    name={pro.name}
                    size={pro.size}
                    website={pro.website}
                    price={pro.price}
                    status={pro.status} />
            ))
        }

        return (
            <div className='products'>
                <Table responsive className="text-center">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>proudct</th>
                            <th>size (US)</th>
                            <th>website</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.prod.products,
        loading: state.prod.loading,
        error: state.prod.error
    }
}


const mapDispatchToProps = dispatch => {
    return {
        initProducts: () => dispatch(actions.initProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)


