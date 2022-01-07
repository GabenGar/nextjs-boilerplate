import CryptoJS from "crypto-js";
import { SECRET_KEY } from "#environment/env-vars";

type EncriptionTypes = "aes";

export interface Encryption {
  encryptString(str: string): string;
  decryptString(str: string): string;
}

const encryptionTypes: Record<EncriptionTypes, Encryption> = {
  aes: {
    encryptString(str: string) {
      return CryptoJS.AES.encrypt(str, SECRET_KEY).toString();
    },

    decryptString(str: string) {
      return CryptoJS.AES.decrypt(str, SECRET_KEY).toString();
    },
  },
};

function createEncryption(
  type: keyof typeof encryptionTypes = "aes"
): Encryption {
  return encryptionTypes[type];
}

export const AESencryption = createEncryption("aes");
