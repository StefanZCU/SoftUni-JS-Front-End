function solve(arr){

    let newArray = [];
    let originalArraySize = arr.length;

    for(let i = 0; i < Math.floor(originalArraySize / 2); i++){
        let smallestNum = Math.min(...arr);
        let largestNum = Math.max(...arr);

        const indexOfSmallestNum = arr.indexOf(smallestNum);
        arr.splice(indexOfSmallestNum, 1);

        const indexOfLargestNum = arr.indexOf(largestNum)
        arr.splice(indexOfLargestNum, 1);

        newArray.push(smallestNum);
        newArray.push(largestNum);
    }

    if(arr.length !== 0){
        newArray.push(arr[0]);
    }

    return newArray;
}