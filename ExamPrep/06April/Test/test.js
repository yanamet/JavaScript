const { expect } = require('chai');
const bookSelection = require('./bookSelection');

describe('Test', () => {

    describe('Suitable Genre', () => {
        it('Thriller is not suitable for kids less than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
        });

        it('Thriller is not suitable for kids at the age of 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        })

        it('Horror is not suitable for kids less than 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
        });

        it('Horror is not suitable for kids at the age of 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        })

        it('Thriller is suitable for kids over 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        })

        it('Horror is suitable for kids over 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        })

        it('Literature is suitable for all ages', () => {
            expect(bookSelection.isGenreSuitable('Literature', 5)).to.equal('Those books are suitable');
        })

    });

    describe("Tests if affordable", () => {
        it('Price is not a number throws an error', () => {
            expect(() => bookSelection.isItAffordable('a', 10)).to.throw(Error);
        });

        it('Budget is not a number throws an error', () => {
            expect(() => bookSelection.isItAffordable(10, 'a')).to.throw(Error);
        });

        it('Price and budget are not a number throws an error', () => {
            expect(() => bookSelection.isItAffordable('a', 'a')).to.throw(Error);
        });

        it('Cannot afford it when result is below 0', () => {
            expect(bookSelection.isItAffordable(10, 9)).to.equal('You don\'t have enough money');
        });

        it('Can afford it when result is 0', () => {
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
        });

        it('Can afford it when result is over 0', () => {
            expect(bookSelection.isItAffordable(10, 11)).to.equal('Book bought. You have 1$ left');
        });
    });

    describe('Are titles suitable', () => {
        it('Books parameter is not an array throws an error', () => {
          expect(() => bookSelection.suitableTitles('a', 'Thriller')).to.throw(Error);
        });

        it('WantedGenre is not a string throws an error', () => {
            expect(() => bookSelection.suitableTitles(['Thriller'], 1)).to.throw(Error);
          });

          it('WantedGenre is not a string and books parameter is not an arraythrows an error', () => {
            expect(() => bookSelection.suitableTitles('a', 1)).to.throw(Error);
          });

          it('WantedGenres are returned correctly', () => {
            expect(bookSelection.suitableTitles([{title: 'The Da Vinci Code', genre: 'Thriller'}], 'Thriller')).to.deep.equal(['The Da Vinci Code']);
          });
    })

})