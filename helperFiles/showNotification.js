import {toast} from "react-toastify";

export const showSuccessNotification = (textString) => {
    toast.success(textString.charAt(0).toUpperCase() + textString.slice(1));
}

export const showInfoNotification = (textString) => {
    toast.info(textString.charAt(0).toUpperCase() + textString.slice(1));
}

export const showWarningNotification = (textString) => {
    toast.warning(textString.charAt(0).toUpperCase() + textString.slice(1));
}

export const showErrorNotification = (textString) => {
    toast.error(textString.charAt(0).toUpperCase() + textString.slice(1));
}