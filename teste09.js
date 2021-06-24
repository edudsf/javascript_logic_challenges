function slice(array, num) {
  const newArr = []
  const count = array.length / num;
  for (let i = 0; i < num; i++) {
    newArr.push(array.slice(0, count))    
    array.splice(0, count)
  }
  if(array.length !== 0){
    newArr[newArr.length-1].push(...array)
  }
  console.log(newArr)
}

slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8)

