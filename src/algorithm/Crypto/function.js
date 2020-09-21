/**
 * 加密和解密方法
 *
 * 使用 AES 做对称性加密
 * 加密模式使用 ECB，此模式不需要偏移量
 * 对待加密字符串和加密盐值进行 parse 后再执行加密结果是固定的
 * 如果不对加密 key 进行解析，加密后的字符串是会变化的
 * 加密 key 的长度必须是16位，否则加密可以成功但是解密无法成功
 */
import CryptoJS from 'crypto-js';

/**
 * 加密 key 长度必须是 16 位
 */
export const aesKey = 'a88sadc4427qdfex';

/**
 * 加密--使用 ECB 模式
 * @param {string} word 需要加密的字符串
 */
export const encrypt = (word, key = aesKey) => {
  if (typeof word !== 'string') {
    // throw new Error('word should be string');
    return -1;
  }
  key = CryptoJS.enc.Utf8.parse(key);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};
/**
 * 解密
 * @param {string} word 需要解密的字符串
 */
export const decrypt = (word, key = aesKey) => {
  key = CryptoJS.enc.Utf8.parse(key);
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
