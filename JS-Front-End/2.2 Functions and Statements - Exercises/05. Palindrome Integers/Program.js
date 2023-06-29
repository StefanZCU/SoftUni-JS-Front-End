function checkForPalindromes(numArr){

    let isPalindrome = true;

    for (const num of numArr) {

        let stringNum = String(num);
        
        for(let i = 0; i < stringNum.length / 2; i++){

            if (stringNum[i] !== stringNum[stringNum.length - i - 1]){
                isPalindrome = false;
            }
        }

        console.log(isPalindrome);
        isPalindrome = true;
    }
}