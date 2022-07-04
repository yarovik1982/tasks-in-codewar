function oddCount(n){
   // let arr = []
   // for(let i = 1; i < n; i++){
   //    arr.push(i) 
   // }
   // return arr.filter(el => el % 2 != 0).length
   let arr = []
   for(let i = 1; i < n; i= i + 2){
      arr.push(i)
   }
   return arr.length
 }
 console.log(oddCount(15));
 console.log(oddCount(15023));//7511
 
