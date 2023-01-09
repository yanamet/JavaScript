const flowerShop = require('./flowerShop');
const { expect } = require('chai');

describe('Tests', () => {
    describe('Flower Price Calculation Test', () => {
        it('Flower is not a string throws an error', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw(Error);
        });

        it('Price is not a number throws an error', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'a', 1)).to.throw(Error);
        });

        it('Quantity is not a number throws an error', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 1, 'a')).to.throw(Error);
        });

        it('Function is working correct', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 2)).to.equal('You need $2.00 to buy Rose!');
        });

    });

    describe('Checking for available flower test', () => {
        it('The wanted flower is not available', () => {
            expect(flowerShop.checkFlowersAvailable('Tulip', ['Rose', 'Daisy'])).to.equal('The Tulip are sold! You need to purchase more!');
        });

        it('The wanted flower is  available', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Daisy'])).to.equal('The Rose are available!');
        });
    });

    describe('Flowers selling test', () => {

        it('Flowers are not array throws an error', () => {
            expect(() => flowerShop.sellFlowers('a', 1).to.throw(Error));
        });

        it('Index is not a number are not array throws an error', () => {
            expect(() => flowerShop.sellFlowers(['a'], 'Invalid').to.throw(Error));
        });

        it('Index is not a number and Flowers are not array  are not array throws an error', () => {
            expect(() => flowerShop.sellFlowers('a', 'Flower').to.throw(Error));
        });

        it('Index is below 0 throws an Error', () => {
            expect(() => flowerShop.sellFlowers(['Rose'], -1).to.throw(Error));
        });

        it('Index is larger that the length of the array throws an Error', () => {
            expect(() => flowerShop.sellFlowers(['Rose'], 2).to.throw(Error));
        });

        it('Index is equal to the length of the array throws an Error', () => {
            expect(() => flowerShop.sellFlowers(['Rose'], 1).to.throw(Error));
        });

        it('function removes flower', () => {
            let garden = ['Rose', 'Tulip', 'Tulip', 'Rose'];
            expect( flowerShop.sellFlowers(garden, 2)).to.equal('Rose / Tulip / Rose');
        });

        
        
    })
});