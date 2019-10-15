'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _DatabaseUtils = require('./utils/DatabaseUtils');

var db = _interopRequireWildcard(_DatabaseUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//connecting to db
db.setUpConnection();

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.get('/notes', function (req, res) {
    db.listNotes().then(function (data) {
        return res.send(data);
    });
});

app.post('/notes', function (req, res) {
    db.createNote(req.body).then(function (data) {
        return res.send(data);
    });
});

app.delete('/notes/:id', function (req, res) {

    db.deleteNode(req.params.id).then(function () {
        db.listNotes().then(function (data) {
            return res.send(data);
        });
    });
});

var PORT = 8080;
var server = app.listen(PORT, function () {
    console.log('server is running in port ' + PORT);
});