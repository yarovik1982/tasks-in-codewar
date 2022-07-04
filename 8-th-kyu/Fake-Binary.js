function fakeBin(x){
   // return x.split("").map(el => el < 5 ? 0 : 1).join("")

   // return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
   
   let str = ''
   for(let i = 0;  i < x.length; i++){
      (x[i] < 5)? str += "0" : str += '1'
   }
   return str
   
}
console.log(fakeBin("45385593107843568"));//01011110001100111