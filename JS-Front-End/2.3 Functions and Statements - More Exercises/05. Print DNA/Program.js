function printDNAHelix(length) {
    const sequence = "ATCGTTAGGG";
    const sequenceLength = sequence.length;
    let currentRow = 0;

    for (let i = 0; i < length; i++) {
        const currentSymbol1 = sequence[currentRow % sequenceLength];
        const currentSymbol2 = sequence[(currentRow + 1) % sequenceLength];

        if (i % 4 === 0) {
            console.log(`**${currentSymbol1}${currentSymbol2}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${currentSymbol1}--${currentSymbol2}*`);
        } else {
            console.log(`${currentSymbol1}----${currentSymbol2}`);
        }

        currentRow = (currentRow + 2) % sequenceLength;
    }
}