const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');

// loads environment variables from a .env file
require('dotenv').config();
const API_KEY = process.env.API_KEY

router.get('/startrek', function(req, res) {
    const queryOptions = {
        params: {
            s: 'star trek',
            apikey: API_KEY,
            type: 'series',
            season: 5
        }
    };

    axios.get('http://www.omdbapi.com', queryOptions)
        .then(function (response) {
            let context = {
                starWarsData: response.data.Search
            }
            // handle success
            res.render('index', context);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
    })
});

module.exports = router 