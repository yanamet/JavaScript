class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    set spaceAvailable(value) {
        this._spaceAvailable = value;
    }

    get spaceAvailable() {
        return this._spaceAvailable;
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) {
            throw Error('Not enough space in the garden.');
        }

        const plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.spaceAvailable -= spaceRequired;

        this.plants.push(plant);

        return `The ${plantName} has been successfully planted in the garden.`;

    }


    ripenPlant(plantName, quantity) {
        const plant = this.findPlantByName(plantName);

        if (!plant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        const message = quantity == 1
            ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;

        return message;
    }

    harvestPlant(plantName) {

        const plant = this.findPlantByName(plantName);

        if (!plant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);
        this.spaceAvailable += plant.spaceRequired;

        const currentStorage = {
            plantName,
            'quantity': plant.quantity
        };

        this.storage.push(currentStorage);

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {
       let message = '';

       message +=  `The garden has ${this.spaceAvailable} free space left.\n`;

       const sortedPlants = this.plants
       .sort((a, b) => a.plantName.localeCompare(b.plantName))
       .map(p => p.plantName);

       message += `Plants in the garden: ${sortedPlants.join(', ')}\n`;

       if(this.storage.length === 0){
        message += 'Plants in storage: The storage is empty.';
       }else{
        const storageArray = this.storage
        .map(s => `${s.plantName} (${s.quantity})`);

        message += `Plants in storage: ${storageArray.join(', ')}`;
       }

       return message;
    }

    findPlantByName(name) {
        return this.plants.find(p => p.plantName == name);
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








