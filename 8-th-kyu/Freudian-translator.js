// function toFreud(string){
//    let newArr = []
//    if(string.length !== 0){
//       let arr = string.split(" ")
//       for(let i = 0; i < arr.length; i++){
//       newArr.push("sex")
//    }
//    return newArr.join(" ")
//    } else if(string == "") {
//       return ""
//    }
// }
// console.log(toFreud(""));
// console.log(toFreud("test"));
// console.log(toFreud("This is a test"));
function howMuchILoveYou(nbPetals) {
   // if( 6){
     switch((nbPetals - 1) % 6){
        case 1:return "a little"
        case 2:return "a lot"
        case 3:return "passionately"
        case 4:return "madly"
        case 5: return "not at all"
       default:return "I love you"
   }
   // }else {
   //   switch(nbPetals % 6){
   //     case 1:return "I love you"
   //     case 2:return "a little"
   //     case 3:return "a lot"
   //     case 4:return "passionately"
   //     case 5:return "madly"
   //     case 6:return "not at all"
   //   }
   // }
}
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(6%6);