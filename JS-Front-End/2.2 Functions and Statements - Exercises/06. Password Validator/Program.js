function passwordValidator(password){

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
    }

    function findTotalCount(str) {
        let count = 0;
      
        for (let ch of str) {
          if (ch >= "0" && ch <= "9") {
            count++;
          }
        }
        return count;
    }

    let validPassword = true;

    if (password.length < 6 || password > 10){
        console.log("Password must be between 6 and 10 characters");
        validPassword = false;
    }

    if (!onlyLettersAndNumbers(password)){
        console.log("Password must consist only of letters and digits");
        validPassword = false;
    }

    if (findTotalCount(password) < 2){
        console.log("Password must have at least 2 digits")
        validPassword = false;
    }

    if (validPassword){
        console.log("Password is valid")
    }

}