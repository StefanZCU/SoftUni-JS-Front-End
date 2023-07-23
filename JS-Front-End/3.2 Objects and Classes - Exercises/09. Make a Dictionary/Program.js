function parseAndPrintDictionary(inputArray) {
    const dictionary = {};

    for (const jsonString of inputArray) {
        const parsedObject = JSON.parse(jsonString);
        const term = Object.keys(parsedObject)[0];
        dictionary[term] = parsedObject[term];
    }

    const sortedTerms = Object.keys(dictionary).sort();
    for (const term of sortedTerms) {
        const definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}