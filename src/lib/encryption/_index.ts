import CryptoJS from "crypto-js";
import { SECRET_KEY } from "#environment/vars";

export interface Encryption {
  encryptString(str: string): string;
  // decryptString?(str: string): string;
}

function encryptSHA3String(str: string) {
  const jsonString = SECRET_KEY + str;
  const encryptedStr = CryptoJS.SHA3(JSON.stringify(jsonString)).toString();
  return encryptedStr;
}

const encryptionTypes: Record<"sha3", Encryption> = {
  sha3: {
    encryptString: encryptSHA3String,
  },
};

function createEncryption(
  type: keyof typeof encryptionTypes = "sha3"
): Encryption {
  return encryptionTypes[type];
}

export const sha3Encryption = createEncryption("sha3");
