const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require('node-fetch');
const request = require('request');

require("dotenv").config({path: __dirname + "/../.env"});

app.use(cors());
app.use(express.json());

//console.log(process.env);

// get tweet
app.get("/prettytweet/:id", async(req, res) => {
    try {
        const tweetId = req.params.id;

        var options = {
            'method': 'GET',
            'url': `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=author_id,created_at,id,source,text`,
            'headers': {
                'Authorization': process.env.BEARER_TOKEN,
            }
        };
        await request(options, async(error, userTweet) => {
            if (error) throw new Error(error);
            //console.log(userTweet.body);
            res.json(userTweet.body);
        });


    } catch (error) {
        console.error(error.message);
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});