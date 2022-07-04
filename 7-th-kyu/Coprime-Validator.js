function isCoprime(x, y) {
   let arrX = []
   let arrY = []
   for(let i = 1; i <= x; i++){
      if(x % i == 0){
         arrX.push(i)
      }
   }
   for(let i = 1; i <= y; i++){
      if(y % i == 0){
         arrY.push(i)
      }
   }
   let arrConcat = arrX.concat(arrY)
   if (arrConcat.sort((a, b) => a - b).filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length > 1) {return false}else{return true}
 }
 console.log(isCoprime(20, 27));
 console.log(isCoprime(12, 39));