import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    errer: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                loading: false,
                error: false
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                loading: true,
                error: true,
                products: []
            }
        default: return state;
    }
}

export default reducer