function generateArray(a,b) {

  const array = []
  
  for(let i=0; i < a; i++)
    array.push(b)
  
  return array
}

generateArray(6,'c')