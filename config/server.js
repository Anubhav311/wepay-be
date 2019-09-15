const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).send({
        message: 'The API is alive!'
    })
})

module.exports = server;