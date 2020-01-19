const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const { setupWebsocket } = require('./websocket');

const app = express();

// server http fora do express
const server = http.Server(app);

setupWebsocket(server);

// conection with database
mongoose.connect('mongodb+srv://lcviga:lcviga@cluster0-5pxn8.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);