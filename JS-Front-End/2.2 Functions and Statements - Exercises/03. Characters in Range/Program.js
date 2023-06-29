function charsInRange(char1, char2){

    let position1 = char1.charCodeAt(0);
    let position2 = char2.charCodeAt(0);

    if (position1 > position2){
        let temp = position1;
        position1 = position2;
        position2 = temp;
    }

    let charArr = [];

    for (let i = position1 + 1; i < position2; i++){
        charArr.push(String.fromCharCode(i));
    }

    console.log(charArr.join(" "));
}