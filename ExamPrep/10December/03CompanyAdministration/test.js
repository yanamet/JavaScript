let companyAdministration = require('./company');
let { expect } = require('chai');

describe('Company Administration Test', () => {
  describe('Hiring people tests', () => {
    it('Position different than Programmer are throwing error', () => {
      expect(() => companyAdministration.hiringEmployee('Peter', 'Invalid', 10)).to.throw(Error);
    });

    it('Working years greater than 3 returns the correct message', () => {
      let expectedOutput = `Peter was successfully hired for the position Programmer.`;
      expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 10)).to.equal(expectedOutput);
    });

    it('Working years equal to 3 returns the correct message', () => {
      let expectedOutput = `Peter was successfully hired for the position Programmer.`;
      expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.equal(expectedOutput);
    });

    it('Working years less than 3 returns the correct message', () => {
      let expectedOutput = `Peter is not approved for this position.`;
      expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 2)).to.equal(expectedOutput);
    });
  });

  describe('Salary Calculation Test', () => {
    it('Hours is not a number throws an error', () => {
      expect(() => companyAdministration.calculateSalary('Invalid')).to.throw(Error);
    });

    it('Hours is a negative number throws an error', () => {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error);
    });

    it('Zero hours return zero salary', () => {
      expect(companyAdministration.calculateSalary(0)).to.equal(0);
    });

    it('Salary calculation is correct for hours less than 160', () => {
      expect(companyAdministration.calculateSalary(10)).to.equal(150);
    });

    it('Salary calculation is correct for hours equal to 160', () => {
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });

    it('Salary calculation is correct for hours over 160', () => {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });

  });

  describe('Firing Employee Test', () => {
    it('Provded parameter employees is not an array throws an error', () => {
      expect(() => companyAdministration.firedEmployee('Invalid', 1)).to.throw(Error);
    });

    it('Both parameters are invalid throws an error', () => {
      expect(() => companyAdministration.firedEmployee('Invalid', -1)).to.throw(Error);
    });


    it('Provded parameter index is beyond the limit of the array throws an error', () => {
      expect(() => companyAdministration.firedEmployee(['Peter'], 2)).to.throw('Invalid input');
    });

    it('Provded parameter index equal to the legth of the array throws an error', () => {
      expect(() => companyAdministration.firedEmployee(['Peter'], 1)).to.throw('Invalid input');
    });

    it('Provded parameter index is a negative number throws an error', () => {
      expect(() => companyAdministration.firedEmployee(['Peter'], -1)).to.throw('Invalid input');
    });

    it('Provded parameter index is a negative number throws an error', () => {
      expect(() => companyAdministration.firedEmployee(['Peter'], 'Invalid')).to.throw('Invalid input');
    });

    it('Function removes the name to the provided index succesfully', () => {
      expect(companyAdministration.firedEmployee(['Peter'], 0)).to.equal('');
    });

    it('Function removes the name to the provided index succesfully', () => {
      expect(companyAdministration.firedEmployee(['Peter', 'John', 'Patric'], 1)).to.equal('Peter, Patric');
    });

  })

});