function generateArrayBetween(num1,num2){
    let num=[] //declaration of the array
    for(let n=num1; n<=num2; n++){  //the new array should begin from num1,increase and stop at num2
        num.push(n) //.push allows us to append a value in the original array
    } return num
}
console.log(generateArrayBetween(2,4))