import React from 'react';

const textTransition = (str) => {
  const STR_LEN = str.length;
  let char = loop(str, STR_LEN);
  console.log(char);
};

const loop = (str, len, i = 0) => {
  let _i = i;
  let char = str.charAt(_i);
  setTimeout(() => {
    _i++;
    if (_i < len) {
      loop(str, len, _i);
    }
    return char;
  }, 300);
};

const returnChars = (char) => {
  return char;
}

const iterateStrIndex = (c, i) => {
  return;
};

export default textTransition;
export { returnChars };
