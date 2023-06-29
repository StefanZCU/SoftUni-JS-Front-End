function averageHighterThanFiveCalculator(originalNum){

    let total = 0;

    for(let i = 0; i < String(originalNum).length; i++){
        total += Number(String(originalNum)[i]);
    }

    total /= String(originalNum).length;

    while(total <= 5){

        let newNum = originalNum + "9";
        originalNum = newNum;
        total = 0;

        for(let i = 0; i < String(originalNum).length; i++){
            total += Number(String(originalNum)[i]);
        }

        total /= newNum.length;
    }

    console.log(originalNum);
}