function solve(string, searchedWord){
    let wordArr = string.split(' ');
    let count = 0;

    for (const word of wordArr) {
        if(word === searchedWord){
            count++;
        }
    }

    console.log(count);
}