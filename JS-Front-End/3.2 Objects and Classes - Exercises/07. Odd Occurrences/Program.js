function extractOddOccurrences(inputString) {
    const wordsArray = inputString.toLowerCase().split(/\s+/);

    const wordsCount = {};
    for (const word of wordsArray) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    }

    const oddOccurrences = [];
    for (const word of wordsArray) {
        if (wordsCount[word] % 2 !== 0 && oddOccurrences.indexOf(word) === -1) {
            oddOccurrences.push(word);
        }
    }

    console.log(oddOccurrences.join(' '));
}