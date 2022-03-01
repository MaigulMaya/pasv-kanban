const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/cards', (req, res) => {
    res.send([
        {id: 1, name: 'First Card', status: 'todo', priority: 2},
        {id: 2, name: 'Second Card', status: 'progress', priority: 5},
    ]);
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})