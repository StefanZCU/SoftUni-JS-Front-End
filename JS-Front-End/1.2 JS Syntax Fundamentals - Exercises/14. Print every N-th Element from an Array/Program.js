function solve(stringArr, nthWord){
    let newArray = [];
    for(let i = 0; i < stringArr.length; i += nthWord){
        newArray.push(stringArr[i]);
    }

    return newArray;
}