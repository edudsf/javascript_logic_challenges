function invert(array) {
  const newArr = []
  for(let i=array.length-1; i>-1; i--)
    newArr.push(array[i])
    
  return newArr
}

invert([1,2,3,4])