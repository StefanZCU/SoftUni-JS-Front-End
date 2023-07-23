function manageParkingLot(arr) {
    const parkingLot = new Set();
    const parkedCars = new Set();

    for (const entry of arr) {
        const [direction, carNumber] = entry.split(', ').map(item => item.trim());

        if (direction === 'IN') {
            if (!parkedCars.has(carNumber)) {
                parkingLot.add(carNumber);
                parkedCars.add(carNumber);
            }
        } else if (direction === 'OUT') {
            if (parkedCars.has(carNumber)) {
                parkingLot.delete(carNumber);
                parkedCars.delete(carNumber);
            }
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        const sortedCarNumbers = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        console.log(sortedCarNumbers.join('\n'));
    }
}
