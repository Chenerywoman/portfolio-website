const express = require('express');
// initialises express framework just installed
const app = express();

// check exact directory pathname
console.log(__dirname)

// routes in the middle
// the first parameter is the route on the browser
app.get('/', (req, res) => {
    console.log("inside home page on backend")
    res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(__dirname + '/about.html');
});

app.get('/top-trumps', (req, res) => {
    res.status(200).sendFile(__dirname + '/top-trumps.html')
});

app.get('/to-do-list', () => {
    res.status(200).sendFile(__dirname + '/to-do-list.html')
});

app.get('/zen-garden', (req, res) => {
    res.status(200).sendFile(__dirname + '/zen-garden.html')
});

app.get('/calculator', (req, res) => {
    res.status(200).sendFile(__dirname + '/calculator.html')
});

app.use((req, res, next) => {
    res.status(404).send("Sorry page not found")
});

// good practice to put the listen at the end
app.listen(3000, ()=> {
    console.log("Server is listening on port 3000")
});

