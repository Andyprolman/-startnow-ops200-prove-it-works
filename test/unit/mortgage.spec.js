const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(10000, 4, 15, 10)
    });

    it('should have a calculate monthly payment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a constructor', () => {
        expect(mortgage.constructor).to.exist;
    });

    it('should correctly calculate the monthly payment', () => {
        expect(mortgage.monthlyPayment()).to.equal(88.78409451935819);
    });

    it('should have a principal variable', () => {
        expect(mortgage.principal).to.exist;
    })
});