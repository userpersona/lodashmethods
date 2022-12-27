let _ = {
   
  };

_.clamp = (number, lower, upper) => {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue , upper);
    return clampedValue;
  },

  
_.inRange = (num, startVal, endVal) => {
  if(endVal === undefined) {endVal = 0}
  if (startVal === undefined) {return `Please specify a lower bound an upper bound.`}
  const lower = Math.min(startVal, endVal)
  const upper = Math.max(startVal, endVal)
// Test if in range
  return lower <= num && num < upper;
  }

  _.inRange1 = (number, start, end) => {
    if(end === undefined) {
      end = start;
      start = 0
    }
    if (start > end) {
      start = end;
      let temp = this.end;
      end = start;
      start= temp
    }
    let isInRange = true;
    if (start <= number && number < end) {
      return isInRange;
    } 
  
  }
  _.words = (string) => {
    let words = string.split(' ');
    return words
     }, 

     _.pad = (string, length) => {
      const Slength = string.length;
      if (length < Slength) {
        return string
      }
      let startPaddingLength = Math.floor((length - Slength) /2);
      let endPaddingLength = (length - Slength) - startPaddingLength;
      let paddedString = ' ';
      let paddedStringRepeat = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
    return paddedStringRepeat
     },

    _.has = (object, key) => {
        if(object[key] === undefined) {
          return false
            } else { 
              return true;
            }
      },
  
   _.invert = (object) => {
      let invertedObject = {};
      let originalOrder;
        for ( let key in object) {
          originalOrder = object[key]
          invertedObject[originalOrder] = key;
        }
        return invertedObject

   },

   _.findKey = (object, predicate) => {
    for (let key in object) {
      let value = object[key];
      let predicateReturnedValue = predicate(value)
      if (predicateReturnedValue) {
         return key
      } 
    } 
    return undefined
  }

  _.drop = (array, n) => {
    if (n === undefined){
      n=1;
    }
    let dropedArray = array.splice(n);
    return dropedArray
  },

  _.dropWhile = (array, predicate) => {
  
    let dropNumber = array.findIndex((element, index) => { 
     return !(predicate(element, index, array))})
     let droppedArray = _.drop(array,dropNumber);
     return droppedArray
   },

   _.chunk = (array , size) => {
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks =  []
    for (let i = 0; i < array.length; i+=size) {
     let arrayChunk = array.slice(i, i + size);
     arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }




// Do not write or modify code below this line.
module.exports = _;

