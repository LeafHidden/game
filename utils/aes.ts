import { enc, mode, AES, pad } from 'crypto-js';

const secretKey = '92D97445-6E64-4AB4-5B35-BA312FDBDF65';
const iv = '54436D92-4700-130F-831F-9DED9392580C';

/**
 * ASE加密
 * @description 使用加密秘钥，对 需要加密的参数 进行加密
 * @param {string} word - 需要加密的参数
 * @param {string} key - 加密密钥（长度必须是 16 的整数倍）
 * @param {string} offset - 偏移量
 */
//加密
export function aseEncryptParams(word: any, key = secretKey, offset = iv) {
    const wordUTF8 = enc.Utf8.parse(JSON.stringify(word));
 
    const keyUTF8 = enc.Utf8.parse(key);
   
    const offsetUTF8 = enc.Utf8.parse(offset);
   
    
   
    const encrypted = AES.encrypt(wordUTF8, keyUTF8, {
      iv: offsetUTF8,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    });
   
    return encrypted.toString();
  }

  export function aesDecryptParams(encryptedWord: any, key = secretKey, offset = iv) {

    const keyUTF8 = enc.Utf8.parse(key);

    const offsetUTF8 = enc.Utf8.parse(offset);
   
    const bytes = AES.decrypt(encryptedWord, keyUTF8, {
      iv: offsetUTF8,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    });
   
    return  bytes.toString(enc.Utf8);
  }


