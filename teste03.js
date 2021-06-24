function clear(array) {
  let newArr = []
  newArr = array.filter(e=>{
    if(e){
      return e
    }
  })
  return newArr
}

clear([1,2,'', undefined])