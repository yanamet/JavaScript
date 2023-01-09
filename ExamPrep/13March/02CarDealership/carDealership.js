class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        const newCar = {
            model,
            horsepower,
            price,
            mileage
        };

        this.availableCars.push(newCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const car = this.findAvailableCarByModel(model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        const mileageDifference = car.mileage - desiredMileage;
        let newCarPrice = 0;

        if (car.mileage <= desiredMileage) {
            newCarPrice = car.price;
        } else if (mileageDifference <= 40000) {
            newCarPrice = car.price * 0.95;
        } else if (mileageDifference > 40000) {
            newCarPrice = car.price * 0.90;
        }

        car.price = newCarPrice;

        this.totalIncome += car.price;

        let carIndex = this.availableCars.indexOf(car);
        this.availableCars.splice(carIndex, 1);

        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {

        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        let message = '';
        message += `-Available cars:\n`;

        let transformedArray = this.availableCars
            .map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);

        message += transformedArray.join(`\n`);

        return message;

    }

    salesReport(criteria) {

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let message = '';

        message += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        message += `-${this.soldCars.length} cars sold:\n`;

        let transformedArray = this.soldCars
            .map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);

        message += transformedArray.join(`\n`);

        return message;

    }

    findAvailableCarByModel(model) {
        return this.availableCars.find(c => c.model == model);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
