function solve(sentence){

    let wordArray = sentence.match(/[\w]+/g).map(x => x.toUpperCase());
    console.log(wordArray.join(", "));
}