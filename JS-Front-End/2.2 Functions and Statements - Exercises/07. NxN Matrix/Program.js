function printMatrix(num){

    let numArr = [];

    for(let i = 0; i < num; i++){

        numArr.push(num);
    }

    for(let j = 0; j < num; j++){
        
        console.log(...numArr);
    }
}