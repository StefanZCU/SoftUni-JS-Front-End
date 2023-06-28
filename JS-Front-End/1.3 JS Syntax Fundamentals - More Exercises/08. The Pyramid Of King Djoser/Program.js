function solve(base, increment){

    let layers = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let counter = 1;
    while(base >= 1){

        if(base > 2){

            stone += (base - 2) * (base - 2);

            if(counter % 5 == 0 ){
                lapis += (base * base) - ((base - 2) * (base - 2));
            }
            else{
                marble += (base * base) - ((base - 2) * (base - 2));
            }
        }
        else{
            gold += (base * base);
        }

        base -= 2;
        counter++;
        layers++;
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(layers * increment)}`);
}