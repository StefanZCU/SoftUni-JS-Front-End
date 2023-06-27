function solve(num){
    let sum = 0;
    let numAsString = String(num);
    for (const number of numAsString) {
        sum += Number(number);
    }

    function test_same_digit(num) {
        var first = num % 10;
        while (num) {
            if (num % 10 !== first) return false;
            num = Math.floor(num / 10);
        }
        return true
    }

    console.log(test_same_digit(num))
    console.log(sum)
}

solve(11111111)