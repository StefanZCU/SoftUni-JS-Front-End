function countOccurrences(sentences) {
    let wordsToFind = sentences[0].split(" ");
    let wordsCount = {};
    sentences.shift();

    for (const wordsToFindElement of wordsToFind) {

        wordsCount[wordsToFindElement] = 0;
    }

    for (const word of sentences) {

        for (const wordsToFindElement of wordsToFind) {

            if (word === wordsToFindElement){
                wordsCount[wordsToFindElement]++;
            }
        }

    }

    const sortedWordsCount = Object.fromEntries(
        Object.entries(wordsCount).sort((a, b) => b[1] - a[1])
    );

    for (const [key, value] of Object.entries(sortedWordsCount)) {
        console.log(`${key} - ${value}`);
    }
}

const sentences = [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
];

countOccurrences(sentences);