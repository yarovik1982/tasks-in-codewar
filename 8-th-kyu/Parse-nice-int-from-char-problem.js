function getAge(inputString){
   let arr = inputString.split(" ")
   return Number(arr[0])
}
console.log(getAge("4 years old"));