const chromosomeCheck = sperm => sperm.includes("Y") ? `Congratulations! You're going to have a daughter.` 
: `Congratulations! You're going to have a son.`

console.log(chromosomeCheck("XX"));
console.log(chromosomeCheck("XY"));