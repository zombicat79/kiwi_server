const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Main numeric input decoding algorithm.
const buildCombinations = require('./helpers/combinationBuilder');

// Favorite words storage.
const frequentWords = {};

// Server instance.
const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.get('/favorites/:input', (req, res, next) => {
    const { input } = req.params;
    const formattedInput = input.toString().slice(0, input.length - 1);
    if (frequentWords[formattedInput.length].length !== 0) {
        randomFavorite = Math.floor(Math.random() * formattedInput.length);
        if (frequentWords[formattedInput.length].length > 1) {
            res.send(frequentWords[formattedInput.length][randomFavorite]);
        }
        else {
            res.send(frequentWords[formattedInput.length][0]);
        }
    }
    else {
        next();
    }
})

app.get('/:input', (req, res, next) => {
    const combinations = (buildCombinations(req.params.input));
    for (let i = 0; i < combinations.length; i++) {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${combinations[i]}`)
        .then((response) => {
            response.data.forEach((el) => {
                if(el.meanings.length !== 0) {
                    res.send(el.word)
                }
            });
        })
        .catch((err) => (err))
    }
})

app.post('/:word', (req, res, next) => {
    const wordEntry = req.params.word;
    if (frequentWords[wordEntry.length] === undefined) {
        frequentWords[wordEntry.length] = [wordEntry];
    }
    else {
        if (!frequentWords[wordEntry.length].includes(wordEntry))
        frequentWords[wordEntry.length] = [...frequentWords[wordEntry.length], wordEntry];
    }
})

app.listen(5000, () => console.log("Listening on port 5000"))