function solve(arr){

    const sortedArr = arr.sort((a,b)=>a-b)
    const originalArraySize = arr.length;
    let newArray = [];

    for(let i = 0; i < originalArraySize / 2; i++){
        newArray.push(sortedArr.shift());
        newArray.push(sortedArr.pop());
    }
    return newArray;
}