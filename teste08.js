function rest(array) {
  const newArr = []
  for(const value of array){
    if(typeof value === 'number'){
      newArr.push(value)
    }
    if(typeof value === 'object'){
      console.log('eu')
      newArr.push(...value)
    }
  }
  return newArr
}

rest([1, 2, [3], [4, 5]])