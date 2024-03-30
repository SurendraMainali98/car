class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
    }

    raceTurn(currentYear) {
        let gasLost = 5 + (currentYear - this.year);
        this.gas -= gasLost;
        console.log(`${this.brand} ${this.model} lost ${gasLost} litres of gas.`);
    }
}

// Create car objects
const cars = [
    new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
    new Car("Ford", "F-150", 2020, "Black", 25000, 30),
    new Car("BMW", "X5", 2022, "Green", 60000, 65),
    new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
    new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
    new Car("Kia", "Forte", 2020, "Blue", 21000, 56)
];

const raceResultsElement = document.getElementById("race-results");

function race() {
    const currentYear = new Date().getFullYear();
    let turns = 7;
    let interval = setInterval(() => {
        if (turns <= 0) {
            clearInterval(interval);
            return;
        }
        raceResultsElement.innerHTML += `<p>Turn ${7 - turns + 1}:</p>`;
        cars.forEach(car => {
            car.raceTurn(currentYear);
            raceResultsElement.innerHTML += `<p>${car.brand} ${car.model}: ${car.gas} litres of gas remaining</p>`;
        });
        turns--;
    }, 1000);
}

// Invoke honk method for each car
cars.forEach(car => car.honk());

// Start the race
race();