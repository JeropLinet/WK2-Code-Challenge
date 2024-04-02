function swapCase(swap){
  return swap.split('').map(swap =>{
    //The .split enables manupulation of the sentence character by character
    //The .map iterates through each character in the sentence
    if(swap === swap.toUpperCase()){
      return swap.toLowerCase()
    }else {
      return swap.toUpperCase()
    }
    //the if..else statement above checks the upper case characters and turns them to lower case
  }).join('')
  //The .join merges all the splitted characters back to one string
}
const sentence="The Quick Brown Fox" //insert your sentence here
const swapSentence= swapCase(sentence) //this serves as calling the swapCase function for it to be executed
console.log(swapSentence) 