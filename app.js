const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Room = require('./models/room.js');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/roomOnRent')
    .then(() => console.log('Connected to Mongo DB'));


// Set the view engine and views directory
app.set('view engine', 'ejs');
app.engine("ejs", ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// for photos uload
const multer = require("multer");
const upload = multer({
    dest: "uploads/"
});


//home page 

app.get("/", async (req, res) => {
    const rooms = await Room.find({})
        .populate("owner");

    res.render("rooms/index.ejs", { rooms });
});


//new page for filling data about the room
app.get('/rooms/new', (req, res) => {
    res.render('rooms/new.ejs');
})

//post when room is on rent
app.post("/rooms", upload.array("photos", 10), async (req, res) => {

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const room = new Room(req.body);

    await room.save();
    // res.send("Received");
    res.redirect("/");

});


//login page
app.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

//sign page
app.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
// adding this project on gitHub on 18 -09 - 2026
// this project is ONGOING Project and will be complted as soon as possible//THANK YOU