class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        let availableProducts = [];
    }

    set owner(value) {
        this._owner = value;
    }

    get owner() {
        return this._owner;
    }

    set location(value) {
        this._location = value;
    }

    get location() {
        return this._location;
    }

    loadingVegetables(vegetables) {
        let result = [];

        for (let current of vegetables) {
            let [type, quantity, price] = current.split(' ');
            let productThatExist = this.findByType(type);
            console.log(productThatExist);

            if (productThatExist) {
                productThatExist.quantity += quantity;

                if (productThatExist.price < price) {
                    productThatExist.price = price;
                }
            } else {
                let newProduct = {
                    type,
                    quantity,
                    price
                };

                this.availableProducts.push(newProduct);
            }

            if (!result.includes(type)) {
                result.push(type);
            }

        }

        return `Successfully added ${result.join(', ')}`;
    }

    findVegetableByType(type) {
        return this.availableProducts.find(v => v.type == type);
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

