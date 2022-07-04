const billboard = (name, price = 30) => name.split("").reduce((sum , _) => {
   return sum + price
}, 0)
// // {
// //    let arr = name.split("")
// //    return arr.reduce((sum, _, )=>{
// //       return sum + price
// //    }, 0)
// //    // return Math.pow(arr.length, price)
// //    // for()

// }
console.log(billboard("Jeong-Ho Aristotelis"))// 600
console.log(billboard("Abishai Charalampos"))//, 570);
console.log(billboard("Idwal Augustin"))//, 420);
console.log(billboard("Hadufuns John",20))//, 260);
console.log(billboard("Zoroaster Donnchadh"))//, 570);
console.log(billboard("Claude Miljenko"))//, 450);
console.log(billboard("Werner Vígi",15))//, 165);