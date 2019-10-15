import express from 'express';
import bodyParser from 'body-parser';

import * as db from './utils/DatabaseUtils';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
})

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
})

app.delete('/notes/:id', (req, res) => {

    db.deleteNode(req.params.id).then(() => {
        db.listNotes().then(data => res.send(data));
    });
})

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('server is running in port ' + PORT)
})