function duplicateCount(text){
   // let arr = text.split('')
   // let obj = {}
   // let counter = 0
   // for(let i of arr){
   //    i = i.toLowerCase()
   //    if(!obj[i]){
   //       obj[i] = 1
   //    }else {
   //       obj[i]++
   //    }
   // }

   // for(let i in obj){
   //    if(obj[i] > 1){
   //       counter++
   //    }
   // }
   // return counter
   return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
 }
 console.log(duplicateCount(""));//0
 console.log(duplicateCount("abcde"));//0
 console.log(duplicateCount("aabbcde"));//2
 console.log(duplicateCount("aabBcde"));//2
 console.log(duplicateCount("Indivisibility"));//1
 console.log(duplicateCount("Indivisibilities"));//2
 console.log(duplicateCount("aA11"));//2