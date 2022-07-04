function eachCons(array, n) {
	return array.map((a,b) => array.slice(b, b + n)).filter(a => a.length == n)
}
console.log(eachCons([3, 5, 8, 13], 1));
console.log(eachCons([3, 5, 8, 13], 2));
console.log(eachCons([3, 5, 8, 13], 3));
console.log(eachCons([], 3));