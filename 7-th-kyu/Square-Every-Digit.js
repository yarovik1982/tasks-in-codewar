function squareDigits(num){
   let str = String(num)
   return Number(str.split('').map(a => a = a * a).join(""))
   // return 0;
 }
 console.log(squareDigits(3212));//9414