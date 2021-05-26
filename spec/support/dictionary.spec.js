const dictionary = require('./../../javascripts/dictionary');
const keys = Object.keys(dictionary)

describe("The dictionary", () => {
    it("should be an object", () => {
        expect(typeof dictionary).toBe("object");
    });
    it("should contain 8 keys", () => {
        expect(keys.length).toBe(8);
    });
    it("keys should contain numbers 2 to 9", () => {
        expect(keys).toEqual(["2", "3", "4", "5", "6", "7", "8", "9"]);
    });
    it("values should mirror number-letter groupings according to front end keyboard layout", () => {
        expect(dictionary[2]).toEqual(["a", "b", "c"]);
        expect(dictionary[3]).toEqual(["d", "e", "f"]);
        expect(dictionary[4]).toEqual(["g", "h", "i"]);
        expect(dictionary[5]).toEqual(["j", "k", "l"]);
        expect(dictionary[6]).toEqual(["m", "n", "o"]);
        expect(dictionary[7]).toEqual(["p", "q", "r", "s"]);
        expect(dictionary[8]).toEqual(["t", "u", "v"]);
        expect(dictionary[9]).toEqual(["w", "x", "y", "z"]);
    });
});