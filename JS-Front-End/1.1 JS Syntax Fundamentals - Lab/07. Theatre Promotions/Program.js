function priceCalculator(day, age){
    let price = 0;

        if(0 <= age && age <= 18){
            switch(day){
                case "Weekday": price = 12; break;
                case "Weekend": price = 15; break;
                case "Holiday": price = 5; break;
                default: price = "Error!"; break;
            }
        }
        else if(18 < age && age <= 64){
            switch(day){
                case "Weekday": price = 18; break;
                case "Weekend": price = 20; break;
                case "Holiday": price = 12; break;
                default: price = "Error!"; break;
            }
        }
        else if(64 < age && age <= 122){
            switch(day){
                case "Weekday": price = 12; break;
                case "Weekend": price = 15; break;
                case "Holiday": price = 10; break;
                default: price = "Error!"; break;
            }
        }
        else{
            price = "Error!";
        }
    console.log(typeof price === "number" ? `${price}$`: price);
}