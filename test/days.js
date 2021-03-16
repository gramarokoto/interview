const expect = require("chai").expect;
const getOpeningDays = require("../test").getOpeningDays;
const getOpeningDaysMessage = require("../test").getOpeningDaysMessage;

describe("Returned value of getOpeningDays", function() {
    it("Test with non null value", function() {

        let input = ['Mardi', 'Mercredi', 'Lundi', 'Dimanche', 'Jeudi'];
        let openingDays = getOpeningDays(input)

        expect(openingDays).to.eql( [ ["Lundi", "Mardi", "Mercredi", "Jeudi"], ["Dimanche"] ] )

    });

    it("Test with empty array", function() {

        let input = [];
        let openingDays = getOpeningDays(input)

        expect(openingDays).to.equal(null)

    });

    it("Test with null value", function() {

        let input = null;
        let openingDays = getOpeningDays(input)

        expect(openingDays).to.equal(null)

    });

    it("Test with value that's not Array", function() {

        let input = 1;
        let openingDays = getOpeningDays(input)

        expect(openingDays).to.equal(null)

    });
});

describe('Return of getOpeningDaysMessage', () => {
    it("Test message value", () => {
        let input = ['Mardi', 'Mercredi', 'Lundi', 'Dimanche', 'Jeudi'];
        let openingDays = getOpeningDays(input)

        expect(getOpeningDaysMessage(openingDays)).to.equal("Ouvert du Lundi au Jeudi, Dimanche.")
    })
})