const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.get('/:id', (req, res, next) => {
    console.log(req.params);
    res.send("hello");
})

app.listen(5000, () => console.log("Listening on port 5000"))