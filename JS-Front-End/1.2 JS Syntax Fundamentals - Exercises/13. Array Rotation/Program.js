function solve(numArray, numRotations){
    for(let i = 0; i < numRotations; i++){
        numArray.push(numArray[0]);
        numArray = numArray.slice(1);
    }

    console.log(numArray.join(" "));
}