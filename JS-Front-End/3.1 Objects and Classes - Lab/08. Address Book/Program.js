function storePersonInfo(infoList) {
    const personInfo = {};

    infoList.forEach(item => {
        const [name, address] = item.split(':');
        personInfo[name.trim()] = address.trim();
    });

    const orderedArr =  Object.entries(personInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of orderedArr) {
        console.log(`${key} -> ${value}`)
    }
}