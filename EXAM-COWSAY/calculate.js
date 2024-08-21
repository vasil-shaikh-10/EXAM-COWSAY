const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// POST /calculator/add
app.post('/calculator/add', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined) {
        return console.log({ error: 'Missing required parameter num1' });
    }

    if (num2 === undefined) {
        return console.log({ error: 'Missing required parameter num2' });
    }

    const result = num1 + num2;
    console.log("Addition of num1 and num2 is : " + result);

});

// POST /calculator/subtract
app.post('/calculator/subtract', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined) {
        return console.log({ error: 'Missing required parameter num1' });
    }

    if (num2 === undefined) {
        return console.log({ error: 'Missing required parameter num2' });
    }

    const result = num1 - num2;
    console.log("Subtraction of num1 and num2 is : " + result);
});

// POST /calculator/multiply
app.post('/calculator/multiply', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined) {
        return console.log({ error: 'Missing required parameter num1' });
    }

    if (num2 === undefined) {
        return console.log({ error: 'Missing required parameter num2' });
    }

    const result = num1 * num2;
    console.log("Maltiply of num1 and num2 is : " + result);
});

// POST /calculator/divide
app.post('/calculator/divide', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined) {
        return console.log({ error: 'Missing required parameter num1' });
    }

    if (num2 === undefined) {
        return console.log({ error: 'Missing required parameter num2' });
    }

    const result = num1 / num2;
    console.log("Division of num1 and num2 is : " + result);
});

app.listen(8082, () => {
    console.log(`Server is running on port 8082`);
});
