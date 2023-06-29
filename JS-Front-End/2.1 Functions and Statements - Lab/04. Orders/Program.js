function calculatePrice(typeOfProduct, quantity){

    let price = quantity;

    switch (typeOfProduct){
        case "coffee": price *= 1.5; break;
        case "coke": price *= 1.4; break;
        case "snacks": price *= 2.0; break;
    }

    console.log(price.toFixed(2));
}