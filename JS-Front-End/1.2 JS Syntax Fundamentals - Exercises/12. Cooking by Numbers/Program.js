function solve(num, cmd1, cmd2, cmd3, cmd4, cmd5){

    let newNum = Number(num);
    let commands = [cmd1, cmd2, cmd3, cmd4, cmd5];

    for (const cmd of commands) {
        
        switch(cmd){
            case "chop": newNum /= 2; break;
            case "dice": newNum = Math.sqrt(newNum); break;
            case "spice": newNum++; break;
            case "bake": newNum *= 3; break;
            case "fillet": newNum -= newNum * 0.2;
        }

        console.log(newNum);
    }
}