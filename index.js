const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello /wow from my node server/change');
});

const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'bipasa', email: 'bipasa@gmail.com', phone: '01788888888' },
    { id: 2, name: 'noumita', email: 'noumi@gmail.com', phone: '01788888888' },
    { id: 3, name: 'kedara', email: 'kedara@gmail.com', phone: '01788888888' },
    { id: 4, name: 'tablet', email: 'tablet@gmail.com', phone: '01788888888' },
    { id: 5, name: 'mobilee', email: 'phone@gmail.com', phone: '01788888888' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting  the post', req.body);
    //res.send(JSON.stringfy(newUser));
    res.json(newUser)
})

//dynamic api
app.get('/users /:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})


app.listen(port, () => {
    console.log('Listening to port', port);
});