import React from 'react';
import { Animated } from 'react-native';

/**
 * initVals:
 * - initial value,
 * - duration,
 * - final value
 */
const setFadeAnimation = (initVals) => {
  const { initVal, duration, finalVal } = initVals;
  console.log(initVal, duration, finalVal);
  // initAnimated(initVal);
  return {
    initVal: initAnimated(initVal)
    // duration:
  };
};

const initAnimated = (init) => {
  return new Animated.value(init);
};

export default setFadeAnimation;
