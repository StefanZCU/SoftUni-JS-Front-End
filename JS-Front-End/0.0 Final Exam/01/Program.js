function solve(input){
    const numRiders = input.shift();
    let riderArr = [];

    for (let i = 0; i < numRiders; i++){
        let riderInfo = input.shift().split("|");

        if (Number(riderInfo[1]) > 100){
            riderInfo[1] = 100;
        }

        let riderObj = {
            rider: riderInfo[0],
            fuelCapacity: Number(riderInfo[1]),
            position: Number(riderInfo[2])
        };
        riderArr.push(riderObj);
    }

    for (const inputElement of input) {
        let commandArr = inputElement.split(" - ");
        let currRider;

        if (commandArr[0] === "StopForFuel"){

            let rider = commandArr[1];
            let minimumFuel = commandArr[2];
            let changedPosition = Number(commandArr[3]);

            for (const riderArrElement of riderArr) {
                if (riderArrElement.rider === rider){
                    currRider = riderArrElement;
                }
            }

            if (currRider.fuelCapacity < minimumFuel){
                console.log(`${currRider.rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                currRider.position = changedPosition;
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }

        } else if (commandArr[0] === "Overtaking"){

            let rider1 = commandArr[1];
            let rider2 = commandArr[2];

            let rider1Index = riderArr.findIndex((x) => x.rider === rider1);
            let rider2Index = riderArr.findIndex((x) => x.rider === rider2);

            if (riderArr[rider2Index].position - 1 === riderArr[rider1Index].position){
                const tempPosition = riderArr[rider1Index].position;
                riderArr[rider1Index].position = riderArr[rider2Index].position;
                riderArr[rider2Index].position = tempPosition;

                console.log(`${rider1} overtook ${rider2}!`);
            }

        } else if (commandArr[0] === "EngineFail"){

            let riderName = commandArr[1];
            let lapsLeft = commandArr[2];

            const objIndex = riderArr.findIndex((x) => x.rider === riderName);
            riderArr.splice(objIndex, 1);

            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)

        } else if (commandArr[0] === "Finish"){

            for (let i = 0; i < riderArr.length; i++) {
                console.log(riderArr[i].rider);
                console.log(`  Final position: ${riderArr[i].position}`);
            }
            return;
        }
    }
}

// solve((["4",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|3",
// "Jorge Lorenzo|80|4",
// "Johann Zarco|80|2",
// "StopForFuel - Johann Zarco - 90 - 5",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"]));