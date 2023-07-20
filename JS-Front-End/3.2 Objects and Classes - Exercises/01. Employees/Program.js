function createEmployeeList(namesArray) {
    const employees = {};

    for (const name of namesArray) {
        const personalNum = name.length;
        employees[name] = personalNum;
    }

    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}