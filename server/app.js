const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const calculate = require('./utils');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.post("/", (req, res) => {
    const expression = req.body.expression;
    if (expression === "") {
        return res.status(400).json({status: 400, message: "Invalid Expression!"})
    }
    const result = calculate(expression);
    res.json( result );
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


