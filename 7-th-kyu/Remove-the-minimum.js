//___Ф-ция должна Вернуть массив без певого минимального значения,не изменяя порядок элементов и не изменяя исходный массив
function removeSmallest(numbers) {
   let arr = numbers.slice()
   if(numbers.length === 0){
      return numbers
   }else {
      let min = arr.indexOf(Math.min(...arr))
      return arr.filter((_,i) => i !== min) 
   }
}

console.log(removeSmallest([1, 2, 3, 4, 5]))//, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]))//, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]))//, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]))//, [], "Wrong result for []");