function solve(speed, area){

    let withinLimits;
    let allowedSpeed = 0;

    switch(area){

        case "residential":

            allowedSpeed = 20;
            withinLimits = allowedSpeed - speed >= 0 ? true : false;

            break;

        case "city":

            allowedSpeed = 50;
            withinLimits = allowedSpeed - speed >= 0 ? true : false;

            break;

        case "interstate":

            allowedSpeed = 90;
            withinLimits = allowedSpeed - speed >= 0 ? true : false;

            break;

        case "motorway":

            allowedSpeed = 130;
            withinLimits = allowedSpeed - speed >= 0 ? true : false;

            break;
    }

    if(withinLimits){
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
    }
    else{
        let difference = speed - allowedSpeed;
        let status;

        if(difference <= 20){
            status = "speeding";
        }
        else if(difference <= 40){
            status = "excessive speeding";
        }
        else{
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)
    }
}