function solve(arr){
    let evenSum = 0;
    let oddSum = 0;

    for(i = 0; i <= arr.length - 1; i++){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i]);
        }
        else{
            oddSum += Number(arr[i]);
        }
    }

    console.log(evenSum - oddSum)
}