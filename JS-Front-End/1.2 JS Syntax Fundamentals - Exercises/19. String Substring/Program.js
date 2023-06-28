function solve(wordToFind, text){
    if(text.toLowerCase().includes(wordToFind.toLowerCase())){
        console.log(wordToFind);
    }
    else{
        console.log(`${wordToFind} not found!`)
    }
}