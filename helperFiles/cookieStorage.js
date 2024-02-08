"use client"

import Cookies from "js-cookie";
import {makeDecrypt, makeEncrypt} from "./encryptDecrypt";

export const cookieStorageGet = async (keyName) => {
    const cookieObj = await Cookies.get(keyName);
    if (cookieObj !== null && cookieObj !== undefined) {
        return makeDecrypt(cookieObj);
    }
    return null;
}

export const cookieStorageSet = async (keyName, keyValue) => {
    const encryptedData = makeEncrypt(keyValue);
    await Cookies.set(keyName, encryptedData, { path: '/', expires: 7 });
    return true;
}

export const cookieStorageRemove = async (keyName) => {
    await Cookies.remove(keyName, { path: '/' })
    return true;
}
