function solve(wordsArr, sentence){
    
    wordsArr = wordsArr.split(", ")

    for (const word of wordsArr) {

        const star = "*";
        const starLength = star.repeat(word.length);

        sentence = sentence.replace(starLength, word);
    }

    console.log(sentence);
}