function filter_list(l) {
   return l.filter(a =>   typeof a === "number")   
}
console.log(filter_list([1,2,'a','b']))//,[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1,'a','b',0,15]))//,[1,0,15], 'For input [1,"a","b",0,15]');

// console.log(isNaN("1"));
// console.log(isNaN("e"));