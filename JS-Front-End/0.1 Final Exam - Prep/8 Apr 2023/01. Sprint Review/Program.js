function solve(input){

    function createWorker(array){

        let allWorkers = [];

        for (let arrElement of array) {

            let splitState = arrElement.split(':');

            allWorkers.push(workerFactory(splitState));
        }

        return allWorkers;
    }

    function workerFactory(splitState){

        let assignee = splitState[0];
        let taskId = splitState[1];
        let title = splitState[2];
        let status = splitState[3];
        let estimatedPoints = splitState[4];

        return {
            assignee,
            taskId,
            title,
            status,
            estimatedPoints
        }
    }

    function assigneeFinder(arrayWorkers, workerToFind){

        let found = false;

        for (const arrayWorker of arrayWorkers) {

            if(workerToFind === arrayWorker.assignee){
                found = true;
            }
        }

        return found;
    }
    const elements = Number(input.shift());
    const initialState = input.slice(0, elements);
    const commands = input.slice(elements);

    let allWorkers = createWorker(initialState);

    for (let command of commands) {

        let splitCommand = command.split(":");

        if(splitCommand[0] === "Add New"){

            splitCommand.shift();
            let assignee = splitCommand[0];

            if (!assigneeFinder(allWorkers, assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {
                allWorkers.push(workerFactory(splitCommand));
            }

        } else if (splitCommand[0] === "Change Status"){

            splitCommand.shift();
            let assignee = splitCommand[0];
            let taskId = splitCommand[1];
            let newStatus = splitCommand[2];

            if (!assigneeFinder(allWorkers, assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {

                let found = false;

                for (let worker of allWorkers) {

                    if(worker.assignee === assignee && worker.taskId === taskId){
                        found = true;
                        worker.status = newStatus;
                        break;
                    }

                }

                if (!found){
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
                }
            }

        } else if (splitCommand[0] === "Remove Task"){

            splitCommand.shift();
            let assignee = splitCommand[0];
            let index = splitCommand[1];

            let indexOfWorkersFound = [];

            for (let i = 0; i < allWorkers.length; i++) {

                if(allWorkers[i].assignee === assignee){
                    indexOfWorkersFound.push(i);
                }
            }

            if (indexOfWorkersFound.length === 0){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                if (index <= indexOfWorkersFound.length - 1){
                    allWorkers.splice(indexOfWorkersFound[index], 1);
                } else {
                    console.log(`Index is out of range!`);
                }
            }
        }
    }

    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    for (const worker of allWorkers) {

        switch (worker.status){
            case "ToDo": toDo += Number(worker.estimatedPoints); break;
            case "In Progress": inProgress += Number(worker.estimatedPoints); break;
            case "Code Review": codeReview += Number(worker.estimatedPoints); break;
            case "Done": done += Number(worker.estimatedPoints); break;
        }

    }

    console.log(`ToDo: ${toDo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if(done >= codeReview + inProgress + toDo){
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }

}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);