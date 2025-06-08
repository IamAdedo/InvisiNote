import CryptoJS from "crypto-js";

const Crypto = {
  encrypt: (text, password) => {
    return CryptoJS.AES.encrypt(text, password).toString();
  },
  decrypt: (cipher, password) => {
    try {
      const bytes = CryptoJS.AES.decrypt(cipher, password);
      return bytes.toString(CryptoJS.enc.Utf8) || "❌ Incorrect password or corrupted file.";
    } catch (err) {
      return "❌ Decryption failed.";
    }
  }
};

export default Crypto;
