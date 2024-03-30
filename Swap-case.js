// let string='The Quick Brown Fox'
// function swapCase(string){
//     string.split(' ').map(string =>{
//     if (string === string.toUpperCase){
//         return string.toLowerCase
//     }else{
//         return string.toUpperCase
//     }
// })
// }
// const swappedString=swapCase(string)
// console.log(swapCase)
function swapCase(str) {
    return str.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
  }
  
  const sentence = "Hello World!";
  const swappedSentence = swapCase(sentence);
  
  console.log(swappedSentence)