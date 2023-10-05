// Create a function that takes a mixed array as input
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    const lowerCaseWordsArray = [];
    
    for (let item of mixedArray) {
      if (typeof item === 'string') {
        lowerCaseWordsArray.push(item.toLowerCase());
      }
    }

    if (lowerCaseWordsArray.length > 0) {
      // If there are lowercase words, resolve the promise
      resolve(lowerCaseWordsArray);
    } else {
      // If no lowercase words found, reject the promise
      reject('No lowercase words found');
    }
  });
};

// Example usage:
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
