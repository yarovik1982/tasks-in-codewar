function getDivisorsCnt(n){
   let arr = []
   for(let i = 1; i <= n; i++){
      if(n % i == 0){
         arr.push(i)
      }
   }
   return arr.length
}
console.log(getDivisorsCnt(1));//1
console.log(getDivisorsCnt(10));//4
console.log(getDivisorsCnt(11));//2
console.log(getDivisorsCnt(54));//8