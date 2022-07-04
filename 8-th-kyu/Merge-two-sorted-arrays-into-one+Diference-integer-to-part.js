function mergeArrays(arr1, arr2) {
  const set = new Set(arr1.concat(arr2).sort((a,b) => a - b))
  return Array.from(set)
}
console.log(mergeArrays([1,2,3,4], [5,6,7,8]));//[1,2,3,4,5,6,7,8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))//, [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))//, [1,2,3,4,5,7,9,10,11,12]



// const difInt = (int, part) => {
//    let arr = []
//    let rNum = Math.round(Math.random() * 10) + 1
//    let arrSlice 
//    let res
//    for(let i = 0; i < (part*2) + 2; i++){
//       arr.push(Math.floor(Math.random() * int))
//    }
//    arrSlice = arr.sort((a,b) => a - b).slice(0, part - 1)
//     res = arrSlice.reduce((sum,el) => sum + el, 0)
//     let dif = res - int
//     if(res == int){
//        arrSlice.push(arrSlice.pop() - rNum)
//        arrSlice.push(rNum)
//       }
//       if(res > int){
//        arrSlice.push(arrSlice.pop() - (rNum + dif))
//        arrSlice.push(rNum + dif)
//     }
//     if (res < int) {
//        let short = int - res
//       arrSlice.push(short)
//       }
//    //  return arrSlice.sort((a, b) => a - b)
//    console.log(`integer : ${int}\npart : ${part} \n ${arrSlice.sort((a, b) => a - b)} `);

// }
// difInt(100, 4);
// difInt(200, 5);
// difInt(300, 6);
// difInt(400, 7);
// difInt(500, 8);
