function convertToObj(array) {
  const newObj = {};
  for (const value of array) {
    newObj[value[0]] = value[1];
  }
  return newObj;
}

convertToObj([
  ["c", 2],
  ["d", 4]
]);
