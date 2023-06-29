function percentageCleanChecker(cmdArgs){
    
    let cleanliness = 0;

    for (const command of cmdArgs) {
        
        switch(command){
            case "soap": cleanliness += 10; break;
            case "water": cleanliness += cleanliness * 0.2; break;
            case "vacuum cleaner": cleanliness += cleanliness * 0.25; break;
            case "mud": cleanliness -= cleanliness * 0.1; break;
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`)
}