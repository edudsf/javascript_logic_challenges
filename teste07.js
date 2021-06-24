function equalElArray(array1, array2) {
  if(array1.length !== array2.length){
    return false
  }
  for(let i=0; i<array1.length; i++){
    if(array1[i] === array2[i]){
      continue
    }else{
      return false
    }
  }
  return true;
}

equalElArray([1,2,3,4,5],[1,2,3,4,5,7])