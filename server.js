// Index : Show all the things!
// New : An empty form for a new thing
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updated form
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!


const express = require('express');

const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');
const app = express();
const port = 3000;

// Data
// const fruits = ['apple', 'banana', 'pear'];

// To spearate the rest of our module from our serve, close down the server and crate another folder called models, () mkdir; then create a file called fruits.js

// Middleware here. ALWAYS PLACE MIDDLEWARE BEFORE ROUTES
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Fruits Routes here
app.get('/fruits', function(req, res){
    res.render('../views/fruits/Index', { fruits: fruits });
}); 

// Vegetables Routes here
app.get('/vegetables', function(req, res){
    res.render('../views/vegetables/Index', { vegetables: vegetables });
}); 

//add fruits show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('../views/fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});

// add vegetables show route
app.get('/vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('../views/vegetables/Show', { //second param must be an object
        vegetables: vegetables[req.params.indexOfVegetablesArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});



// Tell express to listen
app.listen(3000,() => {
    console.log('listening');
});

// use 'nodemon' to get the data to appear on-screen