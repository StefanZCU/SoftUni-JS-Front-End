function subtract() {
    const firstNum = Number(document.getElementById("firstNumber").getAttribute('value'));
    const secondNum = Number(document.getElementById("secondNumber").getAttribute('value'));

    document.getElementById("result").textContent += Number(firstNum - secondNum);


}