function colorize() {
    const tableRows = document.querySelectorAll('table tr');

    for (let i = 1; i < tableRows.length; i += 2) {
        tableRows[i].style.backgroundColor = 'Teal';
    }
}