function compare(array1, array2){
  const newArr = []
  for(let i=0; i<array1.length; i++){
    for(let n=0; n<array2.length; n++){
      if(array1[i] === array2[n]){
        newArr.push(array1[i])
      }
    }
  }
  console.log(newArr)
}

compare([6, 8, 7], [8, 7, 6, 9])