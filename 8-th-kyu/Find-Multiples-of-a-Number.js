function findMultiples(integer, limit) {
  let arr = []
  for(let i = integer; i <= limit; i++){
     arr.push(i)
  }
  return arr.filter(elem => elem % integer == 0)
 }
 console.log(findMultiples(5,25));
 console.log(findMultiples(1,2));
 console.log(findMultiples(5,7));
 console.log(findMultiples(4,27));
 console.log(findMultiples(11,54));
 