function sum(num){

    let evenSum = 0;
    let oddSum = 0;

    for (const number of String(num)) {
        if (Number(number) % 2 === 0){
            evenSum += Number(number);
        } else {
            oddSum += Number(number);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}