const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dictionary = require('./javascripts/dictionary');
const buildCombinations = require('./helpers/combinationBuilder');

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.get('/:id', (req, res, next) => {
    const combinations = (buildCombinations(req.params.id));
    for (let i = 0; i < combinations.length; i++) {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${combinations[i]}`)
        .then((response) => {
            response.data.forEach((el) => {
                if(el.meanings.length !== 0) {
                    res.send(el.word)
                }
            });
        })
        .catch((err) => err)
    }
})

app.listen(5000, () => console.log("Listening on port 5000"))