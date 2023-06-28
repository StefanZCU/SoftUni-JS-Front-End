function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    
    let totalPrice = 0;
    let shieldsBroken = 0;

    for(let i = 1; i <= lostFights; i++){
        
        if (i % 2 === 0){
            totalPrice += helmetPrice;
        }
        if (i % 3 === 0){
            totalPrice += swordPrice;
        }
        if(i % 2 === 0 && i % 3 === 0){
            shieldsBroken++;
            totalPrice += shieldPrice;
        }
        if (shieldsBroken % 2 === 0 && shieldsBroken !== 0){
            totalPrice += armorPrice;
            shieldsBroken = 0;
        }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}