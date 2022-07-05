function countBy(x, n) {
   let z = [];
   let zz = []
 for(let i = 1; i <= n*n; i++)
   z.push(i)
   for(let i = 1; i < z.length; i++){
      if(i % x === 0){
         zz.push(i)
         if(zz.length === n){
            break
         }
      }
   }
   return zz;
  
 }
 console.log(countBy(1,10))//, [1,2,3,4,5,6,7,8,9,10], "Array does not match")
 console.log(countBy(2,5))//, [2,4,6,8,10], "Array does not match")