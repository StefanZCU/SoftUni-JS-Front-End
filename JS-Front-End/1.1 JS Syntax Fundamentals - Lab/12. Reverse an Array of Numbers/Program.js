function solve(position, arr){
    let newArr = [];
    let counter = 0;

    for(i = position - 1; i >= 0; i--){
        newArr[counter] = arr[i];
        counter++;
    }

    console.log(newArr.join(" "));
}