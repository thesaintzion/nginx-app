const express = require('express');
const app = express();
const path = require('path');
const staticView = path.join('./public');

app.use(express.static(staticView));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 4400;
const server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});