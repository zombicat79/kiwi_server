const dictionary = require('../javascripts/dictionary');

/* The purpose of this helper function is to take the numeric input from the keyboard 
in the front end, and convert it into an array of strings of possible letter combinations. */

const buildCombinations = (keyboardInput) => {
    const strInput = keyboardInput.toString().split("");
    const potentialWords = [];

    const numsToLettersMatrix = strInput.map((num) => {
        return dictionary[num]
    })

    for (let i = 0; i < numsToLettersMatrix.length; i++) {
        aggregateLetters(i) 
    }
    
    function aggregateLetters(matrixRow) {
        if (potentialWords.length === 0) {
            numsToLettersMatrix[matrixRow].forEach((el) => {
                potentialWords.push(el);
            })
            return potentialWords;
        }
        else {
            // target preexisting possible letter combinations so they don't recombine in next steps.
            const preexistingWords = potentialWords.map((el) => el)
            
            potentialWords.forEach((el) => {
                numsToLettersMatrix[matrixRow].forEach((matrixRowEl) => {
                    potentialWords.push(el + matrixRowEl);
                })
            })
            
            // get rid of preexisting possible letter combinations so they don't recombine in next steps.
            potentialWords.splice(potentialWords.indexOf(preexistingWords[0]), potentialWords.indexOf(preexistingWords[preexistingWords.length - 1]));
            potentialWords.shift();
            return potentialWords;
        }
    }
    return potentialWords.sort((a, b) => a - b);
}

module.exports = buildCombinations;