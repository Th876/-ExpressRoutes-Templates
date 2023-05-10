// Index : Show all the things!
// New : An empty form for a new thing
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updated form
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!


const express = require('express');

const mysteryonecasts = require('./models/mysteryonecasts.js');

const mysterytwocasts = require('./models/mysterytwocasts.js');

const youcasts = require('./models/youcasts.js');

const riverdalecasts = require('./models/riverdalecasts.js');

const annacasts = require('./models/annacasts.js');

const prettylittleliarscasts = require('./models/prettylittleliarscasts.js');

const app = express();
const port = 3000;


// Middleware here. 
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// MurderMysteryOne Route
app.get('/mysteryonecasts', function(req, res){
    res.render('../views/MurderMysteryOne', { mysteryonecasts: mysteryonecasts });
}); 

//MurderMysteryTwo Route
app.get('/mysterytwocasts', function(req, res){
    res.render('../views/MurderMysteryTwo', { mysterytwocasts: mysterytwocasts });
}); 

//You Route
app.get('/youcasts', function(req, res){
    res.render('../views/You', { 
        youcasts: youcasts });
}); 

// Riverdale Route
app.get('/riverdalecasts', function(req, res)
{
    res.render('../views/Riverdale', { 
        riverdalecasts: riverdalecasts });
}); 

//Inventing Anna Route
app.get('/annacasts', function(req, res)
{
    res.render('../views/InventingAnna', { 
        annacasts: annacasts });
}); 

//Pretty Little Liars Route
app.get('/prettylittleliarscasts', function(req,
    res)
    {
        res.render('../views/PrettyLittleLiars', { 
        prettylittleliarscasts: prettylittleliarscasts });
    }); 








// Tell express to listen
app.listen(3000,() => {
    console.log('listening');
});

// use 'nodemon' to get the data to appear on-screen