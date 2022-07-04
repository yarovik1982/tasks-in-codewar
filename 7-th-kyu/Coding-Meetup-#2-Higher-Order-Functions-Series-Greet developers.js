const list1 = [
   {
     firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
   },
   {
     firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
   },
   {
     firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
   },
 ];

 function greetDevelopers(list1) {
  // for(let i = 0; i < list1.length; i++){
  //   list1[i].greeting = `Hi ${list1[i].firstName}, what do you like the most about ${list1[i].language}?`
  // }
  // return list1
  return list1.map(x => (x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`, x))
}
console.log(greetDevelopers([
  {
    firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  },
  {
    firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
  },
  {
    firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
  },
]));