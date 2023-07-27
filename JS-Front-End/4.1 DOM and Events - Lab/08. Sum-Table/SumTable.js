function sumTable() {
    const priceItems = Array.from(document.querySelectorAll("td:nth-child(even)"));
    let sum = 0;
    for (const priceItem of priceItems) {
        sum += Number(priceItem.textContent);
    }

    const sumElement = document.getElementById('sum');

    sumElement.textContent = sum;


}