const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.use(express.static('client'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})