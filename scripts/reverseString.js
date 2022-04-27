const reverseString = (str) => {
  let rev = "";

  for (let i = str.length; i >= 0; i--) {
    rev += str.substring(i, i + 1);
  }

  return rev;
};

export default reverseString;
