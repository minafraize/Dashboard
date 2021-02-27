import * as actionTypes from '../actions/actionTypes';

const initialState = {
    notifications: [],
    toggleNotification: false,
    toggleLicenseKey: false,
    email: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TRANSFER_MAIL:
            const todoItem = {
                title: action.title,
                id: new Date().toISOString(),
            };
            return { ...state, notifications: [...state.notifications, todoItem], email: action.title }
        case actionTypes.TOGGLE_NOTIFICATION:
            return {
                ...state,
                toggleNotification: !state.toggleNotification
            }
        case actionTypes.TOGGLE_LICENSEKEY:
            return {
                ...state,
                toggleLicenseKey: !state.toggleLicenseKey
            }
        default: return state;
    }
}

export default reducer