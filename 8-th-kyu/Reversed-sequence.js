const solution = n => {
   let arr = []
   for(let i = n; i > 0; i--){
      arr.push(i)
   }
   return arr
}
console.log(solution(5));
console.log(solution(7));