const combinationBuilder = require('./../../helpers/combinationBuilder');

describe("The combinationBuilder function", () => {
    it("should return an array with single letters when passed a single number parameter", () => {
        expect(combinationBuilder(2)).toEqual(["a", "b", "c"]);
        expect(combinationBuilder(9)).toEqual(["w", "x", "y", "z"]);
        expect(combinationBuilder(4)).toEqual(["g", "h", "i"]);
    });
    it("should return an array with recombined letters when passed a multiple number parameter", () => {
        expect(combinationBuilder(23)).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    });
});