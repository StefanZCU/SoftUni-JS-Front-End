function solveEquation(num1, num2, operator){
    let solver = {
        "add": (x, y) => x + y,
        "subtract": (x, y) => x - y,
        "multiply": (x, y) => x * y,
        "divide": (x, y) => x / y
    }

    console.log(solver[operator](num1, num2));
}