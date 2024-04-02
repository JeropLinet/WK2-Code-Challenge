//prime numbers are those that are greater than one have no other positive devisors other than 1 and itself
function generatePrimeNumbers(num){
  if (num <=1){ //prime numbers have to be greater than one
    return false
  }else if(num === 2){  //two is the first even prime number
    return true
  }else if(num === 3){  //three is the first odd prime number
    return true
//2 and 3 are common divisers that are used to check if a number is a prime number
//if the given number is divisible by 2 or 3 ,its reminder would be zero, proving that the number is not a prime number.
//this is why we use the not equal operator,if the reminder is not equal to zero, then the number is a prime number.
  }else if (num % 2 !== 0 || num % 3 !== 0){
    return num
  }
 
}
//.filter returns all the values that passed the test from the else if statement above
console.log([1,2,3,73,101,103,6].filter(generatePrimeNumbers)) //Insert the numbers here