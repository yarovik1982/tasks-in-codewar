function pipeFix(numbers){
   let arr = []
   for(let i = numbers[0]; i <= numbers[numbers.length -1]; i++){
      arr.push(i)
   }
   return arr
  
}
console.log(pipeFix([1,2,3,5,6,8,9]));