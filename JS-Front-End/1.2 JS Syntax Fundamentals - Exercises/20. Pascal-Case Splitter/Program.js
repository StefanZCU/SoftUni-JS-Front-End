function solve(word){


    let newSentence = word.split(/(?=[A-Z])/).join(" ");
    let sentenceArray = newSentence.split(" ");

    console.log(sentenceArray.join(", "));
}