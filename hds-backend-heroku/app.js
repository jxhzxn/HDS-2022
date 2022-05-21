const express = require('express');
const app = express();

const { addtodb, getAllPlayers, connect, deletePlayer } = require('./db/mongoose');

const bodyParser = require('body-parser');

var cors = require('cors')

// Load in the mongoose models
// const { List, Task, User } = require('./db/models');

// const jwt = require('jsonwebtoken');


/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());


// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://hds2022.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.options('*', cors())

app.get('/connect', async(req, res) => {
    await connect()
});

app.get('/getallplayers', async(req, res) => {
    const result = await getAllPlayers()

    result.toArray((err, docs) => {
        res.send({
            data : docs
        })
    })
});

app.options('/testpost', cors())

app.post('/testpost', async(req, res) => {
    const player = {
        name : req.body.name,
        ticket : req.body.ticket,
        timeTook : req.body.timeTook
    }
    await addtodb(player);
    res.send({info:'ok'})
});

app.post('/deletePlayer', async(req, res) => {
    console.log("TO DELETE - ",req.body.ticketNumber)
    // const player = {
    //     name : req.body.name,
    //     ticket : req.body.ticket,
    //     timeTook : req.body.timeTook
    // }
    await deletePlayer(req.body);
    res.send({info:'ok'})
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
})