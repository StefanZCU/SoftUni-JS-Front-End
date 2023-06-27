function solve (num){

    let sum = 0;
    let numInString = String(num);

    for (const num of numInString) {
        sum += Number(num);
    }

    console.log(sum)
}