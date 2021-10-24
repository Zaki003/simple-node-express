// 1
const express = require('express');
const cors = require("cors");
// 2
const app = express();
// 3
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// 4
const handler = (req, res) => {
    res.send('Hello world from my first ever node!');
}
app.get('/', handler);

const users = [
    { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "01232378723" },
    { id: 1, name: "Shahana", email: "shahana@gmail.com", phone: "01232378723" },
    { id: 2, name: "Shrabanti", email: "shrabanti@gmail.com", phone: "01232378723" },
    { id: 3, name: "Shabnaj", email: "shabnaj@gmail.com", phone: "01232378723" },
    { id: 4, name: "Shabnoor", email: "shabnoor@gmail.com", phone: "01232378723" },
];

app.post('/users', (req, res) => {
    const addedUser = req.body;
    addedUser.id = users.length;
    users.push(addedUser);
    console.log('post got hit', req.body);
    res.send(JSON.stringify(addedUser));
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id]);
});

app.get('/users', (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});
// 5
app.listen(port, () => {
    console.log('Listening from port', port);
});