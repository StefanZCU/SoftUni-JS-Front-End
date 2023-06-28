function solve (startingYield){

    let totalExtracted = 0;
    let days = 0;

    for(let i = startingYield; i >= 100; i -= 10){
        totalExtracted += i;
        totalExtracted -= 26;
        days++;
    }

    if(totalExtracted <= 26){
        totalExtracted = 0;
    }
    else{
        totalExtracted -= 26;
    }

    console.log(days);
    console.log(totalExtracted);

}