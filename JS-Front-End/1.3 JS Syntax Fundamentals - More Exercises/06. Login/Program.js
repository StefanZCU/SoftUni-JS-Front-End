function solve(arr){

    let userName = arr[0];
    let password = userName.split("").reverse().join("");

    for(let i = 1; i <= 4; i++){

        if(arr[i] === password){
            console.log(`User ${userName} logged in.`);
            break;
        }
        else if (i === 4){
            console.log(`User ${userName} blocked!`);
            break;
        }
        else{
            console.log("Incorrect password. Try again.")
        }
    }
}