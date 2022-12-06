const http = require('http');
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');

const dotenv = require('dotenv')
dotenv.config()
const routes = require("../routers");



const app = express()
app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

app.use(cors())

app.get('/ping', function (req, res, next) {
  res.json({message: 'pong'})
})

app.listen(3000, function () {
  console.log('server listening on port 5000')
})