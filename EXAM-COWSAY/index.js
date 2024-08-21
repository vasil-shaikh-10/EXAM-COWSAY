const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// POST /file/create
app.post('/file/create', (req, res) => {
    const { filename, data } = req.body;

    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err.message);
        }
        console.log({ message: 'File Created successfully' });
    });
});

// PUT /file/update
app.put('/file/update', (req, res) => {
    const { filename, data } = req.body;

    fs.appendFile(filename, data, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log({ message: 'File Updatred successfully' });
    });
});

// DELETE /file/delete
app.delete('/file/delete', (req, res) => {
    const { filename } = req.body;

    fs.unlink(filename, (err) => {
        if (err) {
            console.log(err.message);
        }
        console.log({ message: 'File Deleted successfully' });

    });
});

app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});
