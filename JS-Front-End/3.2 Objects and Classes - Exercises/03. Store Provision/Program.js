function updateStockAndPrint(storeStock, deliveryProducts) {
    const stock = {};

    for (let i = 0; i < storeStock.length; i += 2) {
        const product = storeStock[i];
        const quantity = parseInt(storeStock[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let i = 0; i < deliveryProducts.length; i += 2) {
        const product = deliveryProducts[i];
        const quantity = parseInt(deliveryProducts[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}