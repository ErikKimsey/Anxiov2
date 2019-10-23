import React from 'react';
import { Dimensions } from 'react-native';

class DeviceDimensions {
  constructor() {
    this.deviceHeight = null;
    this.deviceWidth = null;
    this.elements = [];
  }

  getElements() {
    return this.elements;
  }
  
  createElement(name, w, h) {
    let elem = {
      name,
      dimens: this.calcElementDimensions(w, h)
    };
    this.elements.push(elem);
  }

  // sets device window dimensions
  setDeviceDimensions() {
    const { width, height } = Dimensions.get('window');
    this.height = height;
    this.width = width;
  }

  // retrieves device window dimensions
  getDeviceDimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }

  // Where "w" and "h" are desired dimensions of an element
  calcElementDimensions(w, h) {}
}

export default DeviceDimensions;
