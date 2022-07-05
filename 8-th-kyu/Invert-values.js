// function invert(array) {
//    let arr = []
//    if(array.length === 0) return arr
//    else {
//       for(let i = 0; i < array.length; i++){
//          if(array[i] < 0){
//             arr.push(Math.abs(array[i]))
//          }else {
//             arr.push(-array[i])
//          }
//       }
//       return arr
//    }
// }

function invert(array) {
   return array.map(item => item * (-1));
}
console.log(invert([1,2,3,4,5]))//, [-1,-2,-3,-4,-5]);
    console.log(invert([1,-2,3,-4,5]))//, [-1,2,-3,4,-5]);
    console.log(invert([]))//, []);