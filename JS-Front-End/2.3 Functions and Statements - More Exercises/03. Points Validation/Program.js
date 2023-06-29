function solve(arr){

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    function distance(x1, y1, x2,  y2){

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0); 
    } 

    let result1 = distance(x1, y1, 0, 0);
    let result2 = distance(x2, y2, 0, 0);
    let result3 = distance(x1, y1, x2, y2);

    if(Number.isInteger(result1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(result2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(result3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}