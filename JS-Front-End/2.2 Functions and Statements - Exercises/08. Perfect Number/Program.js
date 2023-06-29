function checkIfNumberIsPerfect(num){
    let currentNum = 0;

    let exponent = 1;
    while(currentNum < num){

        currentNum = 2**exponent * (2**(exponent + 1) - 1);
        exponent++;
    }

    if(currentNum === num){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}