// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8000;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    return '../public/index.html' // ******* didnt really learn this in the lesson so not sure how to do it (Google didn't help)
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.status(200).json(pets)
});

// get pet by owner with query string
app.get('/api/v1/pets/:owner', (req, res) => {
    // get the owner from the request
    const ownerGuy = req.params.owner

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === ownerGuy);

    // send the pet as a response
    res.status(200).json(pet);
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const petName = req.params.name

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === petName);

    // send the pet as a response
    res.status(200).json(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;


// TODO
// JS FILE TO CONNECT THE API TO RENDER ON THE HTML PAGE
// FIND OUT WHY THE QUERY STRING FOR OWNER DOESN'T WORK (L29-38)
// HOW TO "SERVE UP" THE PUBLIC FOLDER INDEX.HTML TO THE ROOT ENDPOINT