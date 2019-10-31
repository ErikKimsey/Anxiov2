import React from 'react';


/**
 * - Iterate str,
 * - isolate indexed character,
 * - apply transition to isolated char,
 * - then push char into new str that will be displayed
 */

let Q = '';

const textTransition = (str) => {
  const STR_LEN = str.length;
  let char = loop(str, STR_LEN);
};

const loop = (str, len, i = 0) => {
  let _i = i;
  let char = str.charAt(_i);
  setTimeout(() => {
    _i++;
    if (_i < len) {
      loop(str, len, _i);
    }
    // console.log(char);
    Q += char;
  }, 300);
  
};

const getChars = (char) => {
  return Q;
};

export default textTransition;
export { getChars, Q };
