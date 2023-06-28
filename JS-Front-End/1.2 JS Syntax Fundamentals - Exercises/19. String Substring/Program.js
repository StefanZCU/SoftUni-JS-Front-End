function solve(wordToFind, text) {
    let array = text.split(" ");
  
    array = array.filter(function (word) {
      if (word.toLowerCase() === wordToFind.toLowerCase()) {
        return word;
      }
    });
  
    if (array.length > 0) {
      console.log(wordToFind);
    } else {
      console.log(`${wordToFind} not found!`);
    }
  }