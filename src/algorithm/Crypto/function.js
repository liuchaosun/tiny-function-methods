import CryptoJS from 'crypto-js';

/**
 * 加密 key 长度必须是 16 位
 */
export const aesKey = 'a88sadc4427qdfex';

/**
 * 加密
 */
export const encrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse(aesKey);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString() + aesKey;
};
/**
 * 解密
 */
export const decrypt = (word) => {
  word = word.slice(0, word.length - 6);
  var key = CryptoJS.enc.Utf8.parse(word.slice(-6));
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};

export default {
  encrypt,
  decrypt,
};
