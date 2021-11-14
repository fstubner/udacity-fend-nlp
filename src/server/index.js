const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('src/client'));
app.use(cors());

const port = 8080;
app.listen(port, listening);

function listening() {
    console.log(`Server started on localhost:${port}`)
}