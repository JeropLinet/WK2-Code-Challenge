const num1=-1
const num2=3
function generateArrayBetween(num1,num2) {
    const length = (num2- num1) + 1;
     //The expression above calculates the length of the array including num1 and num2, by finding th diffrence between the inputed numbers and adding one.
     
    const array = Array.from({ length }, (_, index) => num1 + index)
    //The array.from is like the .map which iterates through the array bringing back new values
    //The index parameter is used to increasingly add value to the num1
    //the underscore before the index enables us to ignore the parameter since it is not needed
    return array.filter(num => num >= num1 && num <= num2)
   //Filter method makes sure the generated nnumbers are within the desired output. 
  }
  
  console.log(generateArrayBetween(num1,num2))