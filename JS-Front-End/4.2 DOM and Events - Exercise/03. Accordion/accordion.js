function toggle() {
    const buttontext = document.getElementsByClassName("button")[0];
    const extraInfo = document.getElementById("extra");

        if (buttontext.textContent === "More"){
            buttontext.textContent = "Less";
            extraInfo.style.display = "block";
        } else if (buttontext.textContent === "Less") {
            buttontext.textContent = "More";
            extraInfo.style.display = "none";
        }

}