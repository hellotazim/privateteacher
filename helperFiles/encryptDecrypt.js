import * as CryptoJS from "crypto-js";

export const makeEncrypt = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), process.env.NEXT_PUBLIC_ENCRYPTION_KEY).toString();
}

export const makeDecrypt = (data) => {
    const decryptedByteData = CryptoJS.AES.decrypt(data, process.env.NEXT_PUBLIC_ENCRYPTION_KEY);
    return JSON.parse(decryptedByteData.toString(CryptoJS.enc.Utf8));

}