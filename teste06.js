function removeDuplicatedValues(array) {
  for (let i = 0; i < array.length; i++) {
    for (let n = 1; n < array.length; n++) {
      if (array[i] === array[n] && n !== i) {
        array.splice(n, 1);
        n = 1;
      }
    }
  }

  return array;
}

removeDuplicatedValues([1, 2, 1, 4, 4, 4, 5, 6]);

