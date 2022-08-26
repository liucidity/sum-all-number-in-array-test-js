function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      return total += sumItems(element);
    } else {
      total += element;
    }
  });
  return total;
  //base case: single layer array and can add sum
}

module.exports = sumItems;