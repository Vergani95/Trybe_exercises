const numbers = (myArray) => {
    for (let index = 0; index < myArray.length; index += 1) {
      if (typeof myArray[index] !== 'number') {
        return false;
      }
    }
    return true;
  };
  
  module.exports = numbers;