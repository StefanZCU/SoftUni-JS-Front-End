function createHeroRegister(input) {
    const heroes = [];

    for (const data of input) {
        const [heroName, heroLevel, itemsString] = data.split(" / ");
        const hero = {
            name: heroName,
            level: Number(heroLevel),
            items: itemsString ? itemsString.split(", ") : [],
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        const { name, level, items } = hero;
        console.log(`Hero: ${name}\nlevel => ${level}\nitems => ${items.join(", ")}`);
    }
}