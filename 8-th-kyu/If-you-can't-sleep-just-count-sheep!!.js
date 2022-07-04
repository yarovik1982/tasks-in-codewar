var countSheep = function (num){
   let counter = 0
   let str = ""
   if(num == 0){
      return ""
   } else {
      while(counter < num){
         counter++
         str += `${counter} sheep...`
      }
      return str
   }
 }
 console.log(countSheep(0));
 console.log(countSheep(1));
 console.log(countSheep(2));
 console.log(countSheep(3));