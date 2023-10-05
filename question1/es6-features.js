const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    const lowerCaseWordsArray = [];
    
    for (let item of mixedArray) {
      if (typeof item === 'string') {
        lowerCaseWordsArray.push(item.toLowerCase());
      }
    }

    if (lowerCaseWordsArray.length > 0) {
      
      resolve(lowerCaseWordsArray);
    } else {
      reject('No lowercase words found');
    }
  });
};


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
