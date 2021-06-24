function removeItems(array, ...res) {
  for (let i = 0; i < array.length; i++) {
    for (const value of res) {
      if (array[i] === value) {
        array.splice(i, 1);
        i = 0;
      }
    }
  }

  return array;
}

removeItems([5, 4, 3, 2, 5], 5, 2);
