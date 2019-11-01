import React from 'react';

/**
 * - Iterate str,
 * - isolate indexed character,
 * - apply transition to isolated char,
 * - then push char into new str that will be displayed
 */

const animatedAray = [];

const textTransition = (str) => {
  // Split string into array.
  const questArr = str.split(' ');
  loop(questArr);
};

const loop = (arr, i = 0) => {
  let _i = i;
  let word = arr[_i];
  setTimeout(() => {
    _i++;
    if (_i < arr.length) {
      loop(arr, _i);
    }
    // console.log(word);
    animatedAray.push(word);
  }, 122);
};

const setAnimatedArray = (str) => {
  textTransition(str);
};
const getAnimatedArray = () => {
  return animatedAray;
};

export default setAnimatedArray;
export { getAnimatedArray };
