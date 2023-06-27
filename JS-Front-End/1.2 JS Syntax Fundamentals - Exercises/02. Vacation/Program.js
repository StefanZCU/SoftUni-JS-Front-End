function solve(numPeople, typeGroup, dayOfWeek){
    let totalPrice;

    switch(typeGroup){
        case "Students":
            switch(dayOfWeek){
                case "Friday": totalPrice = numPeople * 8.45; break;
                case "Saturday": totalPrice = numPeople * 9.8; break;
                case "Sunday": totalPrice = numPeople * 10.46; break;
            }
            break;

        case "Business": 
            switch(dayOfWeek){
                case "Friday": totalPrice = numPeople * 10.9; break;
                case "Saturday": totalPrice = numPeople * 15.6; break;
                case "Sunday": totalPrice = numPeople * 16; break;
            }
            break;

        case "Regular": 
            switch(dayOfWeek){
                case "Friday": totalPrice = numPeople * 15; break;
                case "Saturday": totalPrice = numPeople * 20; break;
                case "Sunday": totalPrice = numPeople * 22.5; break;
            }
            break;
    }

    if(numPeople >= 30 && typeGroup === "Students"){
        totalPrice -= totalPrice * 0.15;
    }

    if(numPeople >= 100 && typeGroup === "Business"){
        switch(dayOfWeek){
            case "Friday": totalPrice -= 10.9 * 10; break;
            case "Saturday": totalPrice -= 15.6 * 10; break;
            case "Sunday": totalPrice -= 16 * 10; break;
        }
    }

    if(numPeople >= 10 && numPeople <= 20 && typeGroup === "Regular"){
        totalPrice -= totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}