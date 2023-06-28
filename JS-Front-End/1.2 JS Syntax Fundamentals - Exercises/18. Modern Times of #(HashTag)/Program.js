function solve(sentence){
    const sentenceArray = sentence.split(" ");
    let foundWord = false;

    for (const word of sentenceArray) {
        if(word[0] === "#"){
            for(let i = 1; i < word.length; i++){

                foundWord = true;

                if(!word[i].match(/[a-z]/i)){
                    foundWord = false;
                    break;
                }
            }

            if(foundWord){
                console.log(word.slice(1));
            }

        }

        foundWord = false;
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')