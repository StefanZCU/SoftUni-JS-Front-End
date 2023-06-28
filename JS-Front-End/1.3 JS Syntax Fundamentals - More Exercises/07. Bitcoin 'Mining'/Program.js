function solve(goldMinedPerDay){

    let totalBitcoins = 0;
    let firstBitcoinDay = 0;
    let totalMoney = 0;

    for(let i = 1; i <= goldMinedPerDay.length; i++){

        let yieldForDay = goldMinedPerDay[i - 1] * 67.51;

        if(i % 3 === 0){
            totalMoney += yieldForDay - (yieldForDay * 0.3);
        }
        else{
            totalMoney += yieldForDay;
        }

        while(totalMoney >= 11949.16){

            totalMoney -= 11949.16;
            totalBitcoins++;

            if(firstBitcoinDay === 0){
                firstBitcoinDay = i;
            }
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if(totalBitcoins !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}