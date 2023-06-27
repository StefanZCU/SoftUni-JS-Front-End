function solve (text, word){
    let censored = text.replace(word, repeat(word));
    while(censored.includes(word)){
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);

    function repeat(word){
        let star = '*';
        return star.repeat(word.length);
    }
}