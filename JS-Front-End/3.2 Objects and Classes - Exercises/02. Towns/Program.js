function createObjectsFromTable(inputArray) {
    const objectsArray = [];

    for (const row of inputArray) {
        const [town, latitudeStr, longitudeStr] = row.split(" | ");
        const latitude = parseFloat(latitudeStr).toFixed(2);
        const longitude = parseFloat(longitudeStr).toFixed(2);

        const obj = {
            town: town.trim(),
            latitude: `${Number(latitude)}`,
            longitude: `${Number(longitude)}`,
        };

        objectsArray.push(obj);
    }

    objectsArray.forEach((obj) => {
        console.log(obj);
    });
}