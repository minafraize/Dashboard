import * as actionTypes from './actionTypes'
import axios from '../../api/api';

export const startProducts = () => {
    return {
        type: actionTypes.START_PRODUCTS
    }
}

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}


// Fetch Data
export const initProducts = () => {
    return dispatch => {
        dispatch(startProducts())
        axios.get('foods')
        .then( res => {
            dispatch(setProducts(res.data))
        })
        .catch(err => {
            dispatch(fetchProductsFail(err))
        })
    }
}

// Toggle Menu
export const ToggleMenu = () => {
    return {
        type: actionTypes.TOGGLE_MEUN
    }
}
