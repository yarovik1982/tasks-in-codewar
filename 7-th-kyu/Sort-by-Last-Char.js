const sortLastChar = str => str.split(" ").sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))

console.log(sortLastChar("yf ldht nhfvf yf nhfdt lhjdf"));
