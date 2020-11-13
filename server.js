const express = require('express');
const app = express();
const path = require('path');
const staticView = path.join('./public');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to  heaven</h1>')
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});