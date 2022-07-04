const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   if( distanceToPump > mpg * fuelLeft){
      return false
   } else{
      return true
   }
 };
 console.log(zeroFuel(50, 25, 2));
 console.log(zeroFuel(100, 50, 1));