function enough(cap, on, wait) {
   if((on + wait) <= cap){
      return 0 
    } else{ 
      return (on + wait) - cap
    }
 }

//  function enough(cap, on, wait) {
//    return Math.max(on + wait - cap, 0);
//  }
 console.log(enough(10, 5, 5))//, 0);
    console.log(enough(100, 60, 50))//, 10);
    console.log(enough(20, 5, 5))//, 0);