const express = require('express');
const cors = require('cors');
const dictionary = require('./javascripts/dictionary');
const buildCombinations = require('./helpers/combinationBuilder');

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.get('/:id', (req, res, next) => {
    const combinations = (buildCombinations(req.params.id));
    res.send(combinations)
})

app.listen(5000, () => console.log("Listening on port 5000"))