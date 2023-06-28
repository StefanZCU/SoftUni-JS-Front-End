function solve(stringArr, nthWord){
    let newArray = [];
    for(i = 0; i < stringArr.length; i += nthWord){
        newArray.push(stringArr[i]);
    }

    return newArray;
}