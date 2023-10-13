// 1. We start in the terminal with "npm init -y" to get an "empty" JSON with dependencies
// 2. Then we install Express and nodemon to use in our project
// 3. We add a new "start" script in our package.json - "nodemon fileName.js" (whatever you name your server file)
// This allows your server to constantly update changes (it restarts every time you make a change)
// 4. Back in the terminal, we instal "body-parser" - npm i body-parser

// Creating our Express.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Just the port we define for our server - it can be any 4 DIGIT number you want
const port = 8080;

const users = [];

app.post('/api/customers', (req, res) => {
    
// Put this --> http://localhost:8080/api/customers <-- inside of Postman
    // console.log(req);
    // console.log(res);
// Un-comment the console logs, start server, and send a post request from Postman to see what req or res return in the console

// L28 - Defining a newUser variable that requests the body - which whenever we push a post request, whatevers in the body (whatever we write in the JSON body on Postman) becomes the newUser's properties (name, email, etc) - ( ?? it seems newUser becomes an object? That we then push to the "users" array that becomes an array of objects ??)
// L30 - Then we simply push that "newUser" data into the "users" array - now there's a newUser in the users array WITH the data from the body
// L32 - Just adding a status code - 201 is 'successfully created" - look up status codes to find what others mean
const newUser = req.body
// console.log(newUser) <-- push the POST request on Postman with something in the body and check the console to see the result of newUser
users.push(newUser)
res.status(201).json(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// Now we can do "npm start" in the terminal to start our server (references the start script in the package.json)












// SLIDES - https://docs.google.com/presentation/d/1XRZ9F4BRj2KEBNbFiGNhRYCw1Wj-T0Hu4uu28MjMOVY/edit#slide=id.g204f07220b7_0_25