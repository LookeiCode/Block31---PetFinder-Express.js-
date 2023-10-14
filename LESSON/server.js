// API END POINTS
// GET - Fetches everything from database (or a specific user via id) - it just fetches things
// POST - Creates a new entry
// PUT - Updates an entry from scratch
// PATCH - Updates a specific part
// DELETE - Deletes

// LESSON START
// 1. We start in the terminal with "npm init -y" to get an "empty" JSON with dependencies
// 2. Then we install Express and nodemon to use in our project (npm i express nodemon)
// 3. We add a new "start" script in our package.json - "nodemon fileName.js" (whatever you name your server file)
// This allows your server to constantly update changes (it restarts every time you make a change)
// 4. Back in the terminal, we install "body-parser" - npm i body-parser

// Creating our Express.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Just the port we define for our server - it can be any 4 DIGIT number you want
const port = 8080;

// We're just going to hard-code and fill this array manually for the lessons sake - but if we had a real database we could fill it in other ways
// TIP: Whenever you're saving anything in a real database, an id will be auto-generated
const users = [
    {
        name: "Tyler",
        email: "tyler@gmail.com",
        id: 1
    },
    {
        name: "Jack",
        email: "Jack@gmail.com",
        id: 2
    },
    {
        name: "Jill",
        email: "Jill@gmail.com",
        id: 3
    },
];

// POST
app.post('/api/customers/new', (req, res) => {
    
// Put this --> http://localhost:8080/api/customers <-- inside of Postman (make sure it's on POST)
    // console.log(req);
    // console.log(res);
// Un-comment the console logs, start server, and send a post request from Postman to see what req or res return in the console (one at a time)

// L56 - Defining a newUser variable that requests the body - which whenever we push a post request, whatevers in the body (whatever we write in the JSON body on Postman) becomes the newUser's properties (name, email, etc) - ( ?? it seems newUser becomes an object? That we then push to the "users" array that becomes an array of objects ??)
// L58 - Then we simply push that "newUser" data into the "users" array - now there's a newUser in the users array WITH the data from the body
// L59 - Just adding a status code telling the user that the request went through - 201 is 'successfully created" - look up status codes to find what others mean
const newUser = req.body
// console.log(newUser) <-- push the POST request on Postman with something in the body and check the console to see the result of newUser
users.push(newUser)
res.status(201).json(newUser)
})

// GET

app.get('/api/customers', (req, res) => {
// Basically just returns the array "users" (on L27) in JSON format
     res.status(200).json(users)
})
// We need to put something in here otherwise the GET will response/return with an empty array

// We added an :id to the end of our route - obviously we're searching for a specific customer by id with this route - you can have :name or whatever you want
app.get('/api/customers/:id', (req, res) => {
// we do "parseInt" because JSON returns everything in strings, but the id is a number, so parseInt turns the id number (that's a string because of JSON) into an actual number (typeof)
const userId = parseInt(req.params.id);

// If we add a id, which is a number, on to the end of our route, you can observe in the console via the console log that it will return the number
// Example: http://localhost:8080/api/customers/1 <--- will return "1" in the console
// You must push the GET request via Postman to see the console log
// The console log on L81 will show the result

const user = users.find(user => user.id === userId);
console.log(user);

// Returning an error IF our user/id is not found ( example: http://localhost:8080/api/customers/345 - this id doesn't exist )
// Returns the user/id IF found
if (!user) {
    return res.status(404).send({error: 'User not found'})
}
res.status(200).json(user);
})

// DELETE
app.delete('/api/customers/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === userId);
    // findIndex is a method - it returns -1 if nothing is found - which is why the IF statement on L96 works

    if (index === -1) {
        return res.status(404).json({error: 'User not found'})
    }

    // Splices the array and isolates one element then deletes it (because this is a DELETE endpoint)
    // If the index does find someone (the ID exists) it returns 1, and that ID that we got from L92 is targeted for deletion
    users.splice(index, 1);
    res.status(204).send();
    // The status 200 here would just mean it was successfully deleted

    // WHAT'S HAPPENING HERE - we index through the users array, findIndex targets an id from a user we specify, userID parses the ID string into a number (integer), then on L102 we splice (isolate/target) that ID from the index for deletion
})

// PUT
app.put('/api/customers/update/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const updateUser = req.body
    //updateUser will grab whatever is in the body in Postman then update the user with the ID we specify/target

    const index = users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({error: 'User not found'})
    }

    // The index below is open-ended - it looks like a word but it really just represents an integer (id number in this case)
    // Example: users[1], or it could be users[2], etc - it's whatever ID you specify/target
    users[index] = {...users[index], ...updateUser}
    res.status(200).json(users[index])
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// Now we can do "npm start" in the terminal to start our server (references the start script in the package.json)










// two routes, same name, serving different purposes = bad practice
// example: you have a POST and GET request with the same routes (/api/customers)
// name your routes according to the purpose of the request (POST, GET, etc) that makes the most sense (almost like naming variables, does the name make sense?)