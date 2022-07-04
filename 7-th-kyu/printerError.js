// function printerError(s) {
//    let checkStr = "abcdefghijklm"
//    let arr = s.split('')
//    let invalidSimbol = []
//    for(let i = 0; i < arr.length; i++){
//       if(checkStr.includes(arr[i])) continue
//       else {
//          invalidSimbol.push(arr[i])
//       }
//    }
//    return `${invalidSimbol.length}/${arr.length}`
// }

const printerError = s => s.replace(/[a-m]/ig, '').length + "/" + s.length;
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));