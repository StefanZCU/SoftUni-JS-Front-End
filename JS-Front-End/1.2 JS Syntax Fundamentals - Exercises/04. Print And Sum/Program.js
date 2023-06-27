function solve(num1, num2){

    let numArr = [];
    let sum = 0;
    let counter = 0;
    for (let i = num1; i <= num2; i++) {
        numArr[counter] = i;
        sum += i;
        counter++;
    }

    console.log(numArr.join(" "));
    console.log(`Sum: ${sum}`);
}