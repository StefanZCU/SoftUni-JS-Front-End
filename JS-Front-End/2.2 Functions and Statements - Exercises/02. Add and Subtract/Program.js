function sum(num1, num2, num3){

    function subtract(sum, num3){
        return sum - num3;
    }
    let total = num1 + num2;
    total = subtract(total, num3);

    console.log(total);
}