const express = require("express");
const fs = require('fs');

const http = require('http');
const https = require('https');

var privateKey  = fs.readFileSync('ssl/key.pem', 'utf8');
var certificate = fs.readFileSync('ssl/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const bodyParser = require("body-parser");

const app = express();

const cors = require('cors')
const push = require("./push");

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/subscriptions", (req, res) => {
  const subscriptions = JSON.parse(fs.readFileSync("subscriptions.json"));
  // res.status(200).json({ sucses: subscriptions });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(subscriptions));
});

app.post("/subscriptions", (req, res) => {

  const subscriptions = JSON.parse(fs.readFileSync("subscriptions.json")) || [];

  const pushSubscription = req.body;

  subscriptions.push(pushSubscription);

  fs.writeFileSync("subscriptions.json", JSON.stringify(subscriptions));

  console.log('Subscription saved');
  res.status(201).json({});
});

app.post("/subscription", (req, res) => {
  const pushSubscription = req.body;
  fs.writeFileSync("subscriptions.json", JSON.stringify(pushSubscription));
  console.log('Subscription saved');
  res.status(201).json({});
});

app.post("/sendpush", (req, res) => {

  const pushSubscription = req.body;

  const payload = JSON.stringify({
    "notification": {
      "title": "DUNK PUSH",
      "icon": "https://sun1-55.userapi.com/s/v1/if1/viWGM0FZ1qz8kUlbj3O3-psqVDtQWSm1UQ6WzeVp5AdZ-AQPdAZLlzsSoZV5VTcoR6j8azrM.jpg?quality=96&crop=188,7,422,422&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&ava=1&cs=50x50",
      "data": {
        "onActionClick": {
          "default": { "operation": "openWindow", "url": "https://www.youtube.com/channel/UCLZX5mWyQ0v1Z4ssk9uJw-g" }
        }
      }
    }
  });

  // const pushSubscription = JSON.parse(fs.readFileSync("subscriptions.json"));
  push.sendNotification(pushSubscription, payload);

  res.status(201).json({});
});

// app.listen(3000, "0.0.0.0");

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3443);

