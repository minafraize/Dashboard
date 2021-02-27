import * as actionTypes from './actionTypes'

//  Toggle License Key
export const toggleLicenseKey = () => {
    return {
        type: actionTypes.TOGGLE_LICENSEKEY
    }
}

//  Toggle Notification
export const toggleNotification = () => {
    return {
        type: actionTypes.TOGGLE_NOTIFICATION
    }
}

//  Transfer Mail
export const transferMail = itemValue => {
    return {
        type: actionTypes.TRANSFER_MAIL,
        title: itemValue
    }
}