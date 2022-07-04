// const isUpperCase = (str) => str == str.toUpperCase()? true : false
String.prototype.isUpperCase=function() {
   return this==this.toUpperCase()
}
console.log(isUpperCase("c"));
console.log(isUpperCase("C"));