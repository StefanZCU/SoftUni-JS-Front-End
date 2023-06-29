function divideFactorials(num1, num2){

    function findFactorial(num){
        if (num == 0) {
            return 1;
        }
        else {
            return num * findFactorial(num - 1);
        }
    }

    let factorial1 = findFactorial(num1);
    let factorial2 = findFactorial(num2);

    console.log((factorial1 / factorial2).toFixed(2));
}