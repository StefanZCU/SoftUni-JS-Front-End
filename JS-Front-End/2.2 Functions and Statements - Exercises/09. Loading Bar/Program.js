function visualizeLoadingBar(percentComplete){

    function replaceCharacter(string, index, replacement) {
        return (
          string.slice(0, index) +
          replacement +
          loadingBar.slice(index + replacement.length)
        );
    }

    let loadingBar = "[..........]"

    for(let i = 1; i <= percentComplete / 10; i++){
        loadingBar = replaceCharacter(loadingBar, i, "%");
    }

    if (percentComplete === 100){
        console.log("100% Complete!")
        console.log(loadingBar);
    } else {
        console.log(`${percentComplete}% ${loadingBar}`)
        console.log("Still loading...")
    }
}