const _encodeCharacter = (c, shift) => {
  // If the character is not a letter, just return it.
  if (c.toLowerCase() === c.toUpperCase()) {
    return c;
  }

  let actualShift = shift > 0 ? shift % 26 : 26 + (shift % 26);
  let charCode = c.charCodeAt(0);
  let newCharCode;

  if (65 <= charCode && charCode <= 90) {
    newCharCode = ((charCode - 65 + actualShift) % 26) + 65;
  } else if (97 <= charCode && charCode <= 122) {
    newCharCode = ((charCode - 97 + actualShift) % 26) + 97;
  }

  return String.fromCharCode(newCharCode);
};

const caesarCipher = (str, shift) => {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    encoded += _encodeCharacter(str[i], shift);
  }

  return encoded;
};

export default caesarCipher;
