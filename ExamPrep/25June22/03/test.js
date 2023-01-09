
const carService = require('./03. Car service_Resources');
const { expect } = require('chai');

describe('Test', () => {
    describe('isItExpensive tests', () => {
        it('Parameter Value equal to Engine returns thne right message', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        })

        it('Parameter Value equal to Transmission returns thne right message', () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        })

        it('Parameter Value is different than Transmission and Engine returns thne right message', () => {
            expect(carService.isItExpensive('Different')).to.equal('The overall price will be a bit cheaper');
        })

        it('Parameter Value different than Transmission and Engine returns thne right message with value other', () => {
            expect(carService.isItExpensive('other')).to.equal('The overall price will be a bit cheaper');
        })

        it('Parameter Value different than Transmission and Engine returns thne right message with value anotherTest', () => {
            expect(carService.isItExpensive('anotherTest')).to.equal('The overall price will be a bit cheaper');
        })
    })

    describe('Discount test', () => {

        it('Invalid inputs throw an Error', () => {
            expect(() => carService.discount('Invalid', 'Invalid')).to.throw(Error);
            expect(() => carService.discount('Invalid', 3)).to.throw(Error);
            expect(() => carService.discount(3, 'Invalid')).to.throw('Invalid input');
            expect(() => carService.discount('0', '3')).to.throw('Invalid input');
            expect(() => carService.discount(undefined, 3)).to.throw('Invalid input');
            expect(() => carService.discount(3, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(undefined, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(null, 3)).to.throw('Invalid input');
            expect(() => carService.discount(3, null)).to.throw('Invalid input');
            expect(() => carService.discount(null, null)).to.throw('Invalid input');

        })

        it('numberOfParts is smaller than  2 return the right message', () => {
            expect(carService.discount(1, 5)).to.equal('You cannot apply a discount');
        });

        it('numberOfParts is smaller than  2 return the right message with value 0', () => {
            expect(carService.discount(0, 5)).to.equal('You cannot apply a discount');
        });

        it('numberOfParts is smaller than  2 return the right message with value -1', () => {
            expect(carService.discount(-1, 5)).to.equal('You cannot apply a discount');
        });

        it('numberOfParts is equal to 2 return the right message', () => {
            expect(carService.discount(2, 5)).to.equal('You cannot apply a discount');
        });

        it('number bigger than 2 returns the right discount with  value 3', () => {
            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved ${1.5}$`);
        })

        it('number bigger than 2 returns the right discount with  value 7', () => {
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved ${1.5}$`);
        })

        it('number bigger than 2 returns the right discount with  value 5', () => {
            expect(carService.discount(5, 10)).to.equal(`Discount applied! You saved ${1.5}$`);
        })

        it('number bigger than 7 returns the right discount with  value 8', () => {
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${3}$`);
        })

        it('number bigger than 7 returns the right discount with  value 9', () => {
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${3}$`);
        })

        it('number bigger than 7 returns the right discount with  value 10', () => {
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${3}$`);
        })

    })

    describe('Parts to buy test', () => {
        it('Parameter partsCatalog is not an Array throws an Error', () => {
            expect(() => carService.partsToBuy(0, [])).to.throw(Error);
            expect(() => carService.partsToBuy('invalid', [])).to.throw(Error);
            expect(() => carService.partsToBuy(undefined, [])).to.throw(Error);

        })

        it('Parameter neededParts is not an Array throws an Error', () => {
            expect(() => carService.partsToBuy([], 0)).to.throw(Error);
            expect(() => carService.partsToBuy([], 'invalid')).to.throw(Error);
            expect(() => carService.partsToBuy([], undefined)).to.throw(Error);
        })

        it ('Parts catalog is empry returns 0', () => {
            expect(carService.partsToBuy([], [])).to.equal(0);
            expect(carService.partsToBuy([], ['Sth'])).to.equal(0);
            expect(carService.partsToBuy([], ['Sth', ['Sth2']])).to.equal(0);
        })

        it ('The right total sum is returned with only one element', () => {
            let partsCatalog = [{part: 'helmet', price: 10}];
            let neededParts = ['helmet'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(10);
        })

        it ('The right total sum is returned with only one element with three needed elements', () => {
            let partsCatalog = [{part: 'helmet', price: 10}, {part: 'mirror', price: 10}, {part: 'seatbelt', price: 10}];
            let neededParts = ['helmet', 'seatbelt'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(20);
        })

        it ('The right total sum is returned with only one element with needed seatbelt only', () => {
            let partsCatalog = [{part: 'helmet', price: 10}, {part: 'mirror', price: 10}, {part: 'seatbelt', price: 10}];
            let neededParts = ['seatbelt'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(10);
        })

        it ('The right total sum is returned with only one element with needed seatbelt and mirror only', () => {
            let partsCatalog = [{part: 'helmet', price: 10}, {part: 'mirror', price: 10}, {part: 'seatbelt', price: 10}];
            let neededParts = ['seatbelt', 'mirror'];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(20);
        })
        

    })


})