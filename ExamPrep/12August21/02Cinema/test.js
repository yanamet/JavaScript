const cinema = require('./cinema');
const { expect, assert } = require('chai');



describe('Test', () => {
    describe('Show movies test', () => {

        it('Array length zero returns the right message', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('Function returns the movies separated by comma', () => {
            assert.equal(cinema.showMovies(['Great Gatsby', 'The wolf of wallstreet']), 'Great Gatsby, The wolf of wallstreet');
        });


    });

    describe('Ticket price test', () => {

        it('Function throws an error if the projection type is not included', () => {
            expect(() => cinema.ticketPrice('VIP')).to.throw('Invalid projection type.')
        });

        it('Function returns the right projection type price', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);

        });
    });

    describe('Swap seats test', () => {

        it('Function returns unsuccessfull change when the first seat is greater than the hall capacity', () => {
            expect(cinema.swapSeatsInHall(21, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the first seat is lower than 0', () => {
            expect(cinema.swapSeatsInHall(-1, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the first seat is equal to 0', () => {
            expect(cinema.swapSeatsInHall(0, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the first seat is not a number', () => {
            expect(cinema.swapSeatsInHall(NaN, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('Invalid', 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5, 15)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 5.5)).to.equal('Unsuccessful change of seats in the hall.');
            

        });

        it('Function returns unsuccessfull change when the second seat is greater than the hall capacity', () => {
            expect(cinema.swapSeatsInHall(10, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the second seat is lower than 0', () => {
            expect(cinema.swapSeatsInHall(10, -1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        
        it('Function returns unsuccessfull change when the second seat is equal to 0', () => {
            expect(cinema.swapSeatsInHall(10, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when both seats are invalid', () => {
            expect(cinema.swapSeatsInHall('Invalid', 'Invalid')).to.equal('Unsuccessful change of seats in the hall.');
        });


        it('Function returns unsuccessfull change when both seats are 0', () => {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Function returns unsuccessfull change when the first seat is not a number', () => {
            expect(cinema.swapSeatsInHall(10, NaN)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 'Invalid')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, undefined)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the first seat is equal to the second seat', () => {
            expect(cinema.swapSeatsInHall(10, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function returns unsuccessfull change when the first seat is equal to the second seat', () => {
            expect(cinema.swapSeatsInHall(10, '10')).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Function works correctly and returns the right message', () => {
            expect(cinema.swapSeatsInHall(11, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 18)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(9, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });
       
    });
    
});