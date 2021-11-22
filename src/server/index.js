// Importing environment variables
const dotenv = require('dotenv');
dotenv.config();

// Initialising express app and middleware
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static('dist'));

// Setting up CORS
const cors = require('cors');
app.use(cors());

// Starting express server
const port = 8080;
app.listen(port, listening);

/**
* @description Callback function for Express server.
*/
function listening() {
    console.log(`Server started on http://localhost:${port}`)
}

const axios = require('axios').default;
let sentimentResult = {
    agreement: '',
    subjectivity: '',
    confidence: '',
    irony: ''
};

/**
* @description Returns the sentimentResult JSON object.
* @param {express.Request} req Request made to endpoint.
* @param {express.Response} res Response object to respond.
* @returns {JSON} JSON object sentimentResult.
*/
app.post('/getSentiment', async (req, res) => {
    await axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=auto`, {
        method: 'POST',
        redirect: 'follow'
    })
        .then(res => {
            sentimentResult.agreement = res.data.agreement;
            sentimentResult.subjectivity = res.data.subjectivity;
            sentimentResult.confidence = res.data.confidence;
            sentimentResult.irony = res.data.irony;
        })
        .catch(error => console.log('error', error))
    res.json(sentimentResult);
})
