const rentCar = require('./rentCar.js');
const { expect } = require('chai');


describe('RentCar tests', () => {

    describe('Search car tests', () => {
        it('Function throws an error when shop is not an array', () => {
            expect(() => rentCar.searchCar('Invalid', 'Audi')).to.throw(Error);
        });

        it('Function throws an error when model is not a string', () => {
            expect(() => rentCar.searchCar(['Audi'], 1)).to.throw(Error);
        });

        it('Function throws an error when model is not a string and shop is not an array', () => {
            expect(() => rentCar.searchCar('Audi', 1)).to.throw(Error);
        });

        it('No match returns a message', () => {
            expect(() => rentCar.searchCar(['Audi'], 'BMW')).to.throw(Error);
        });

        it('Function returns the right amount of cars', () => {
            const arrayOfCars = ['BMW', 'Mercedes', 'BMW', 'Honda'];
            expect(rentCar.searchCar(arrayOfCars, 'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
        });

    });

    describe('Car price calculation tests', () => {

        it('Function throws an error when model is not a string', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw(Error);
        });

        it('Function throws an error when days is not a number', () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', 'a')).to.throw(Error);
        });

        it('Function throws an error when the model is not found', () => {
            expect(() => rentCar.calculatePriceOfCar('Honda', 1)).to.throw(Error);
        });

        it('Function calculates the right price', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');
        });
    });

    describe('Check budget tests', () => {

        it('Function throws an error when costPerDay is not a number', () => {
            expect(() => rentCar.checkBudget('a', 1, 1)).to.throw(Error);
        });

        it('Function throws an error when days is not a number', () => {
            expect(() => rentCar.checkBudget(1, 'a', 1)).to.throw(Error);
        });

        it('Function throws an error when budget is not a number', () => {
            expect(() => rentCar.checkBudget(1, 1, 'a')).to.throw(Error);
        });

        it('Function returns a message for bigger budget when money is not ehough', () => {
            expect(rentCar.checkBudget(20, 1, 19)).to.equal('You need a bigger budget!');
        });

        it('Function returns a message when car is rented with a higher budget', () => {
            expect(rentCar.checkBudget(20, 1, 30)).to.equal('You rent a car!');
        });

        it('Function returns a message when car is rented with a budget as big as the cost', () => {
            expect(rentCar.checkBudget(20, 1, 20)).to.equal('You rent a car!');
        });


    });

});


console.log(rentCar);
