const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const request = require("request");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);
myHeaders.append("Cookie", "personalization_id=\"v1_jBJTlEqUjM3Gld7jKx1Qow==\"; guest_id=v1%3A159987700105431287");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.twitter.com/2/tweets/1258078935490928641", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


const app = express();
let port = process.env.PORT || 3000;
const post = util.promisify(request.post);
const get = util.promisify(request.get);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIo(server);

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

let timeout = 0;

const streamURL = new URL(
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id"
);

const endpointURL = "https://api.twitter.com/2/tweets?ids=";

const errorMessage = {
  title: "Please Wait",
  detail: "Waiting for new Tweets to be posted...",
};

const authMessage = {
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct. 
      If using Glitch, remix this app and add it to the .env file`,
  ],
  type: "https://developer.twitter.com/en/docs/authentication",
};

const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), delay));
};

async function getRequest() {

    const params = {
        "ids": "1258078935490928641", // Edit Tweet IDs to look up
        "tweet.fields": "lang,author_id", // Edit optional query parameters here
        "user.fields": "created_at" // Edit optional query parameters here
    }

    const res = await needle('get', endpointURL, params, { headers: {
        "authorization": `Bearer ${token}`
    }})

    if(res.body) {
        return res.body;
    } else {
        throw new Error ('Unsuccessful request');
    }
}


app.get('/', async (req, res) => {
    if (!BEARER_TOKEN) {
        res.status(400).send(authMessage);
    }

    try{
        const response = await getRequest();
        console.log(response);
    } catch(e){
        res.status(400).send(authMessage);
        console.log(e);
        process.exit(-1);
    }
});

const reconnect = async (stream, socket, token) => {
  timeout++;
  stream.abort();
  await sleep(2 ** timeout * 1000);
  streamTweets(socket, token);
};

io.on("connection", async (socket) => {
  try {
    const token = BEARER_TOKEN;
    io.emit("connect", "Client connected");
    const stream = streamTweets(io, token);
  } catch (e) {
    io.emit("authError", authMessage);
  }
});

console.log("NODE_ENV is", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
}

server.listen(port, () => console.log(`Listening on port ${port}`));

    