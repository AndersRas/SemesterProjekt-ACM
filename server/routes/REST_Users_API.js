var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var period = mongoose.model('Period');
var student = mongoose.model('Student');
var classes = mongoose.model('Class');
var point = mongoose.model('Point');
var dbLayer =require('../UserDataLayer')

var router = express.Router();
router.get('/test', function(req, res) {
    res.header("Content-type","application/json");
    res.end('{"msg" : "Test Message, You are logged on as a User since you could fetch this data"}');
});
router.get('/getClasses/:studentId', function(req, res) {
    dbLayer.getClass(function (err, data) {
        if (err) {res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));
    });
});
router.get('/getStudents/:student', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    var chooseStudent = req.params.student;
    dbLayer.getStudent(chooseStudent,function (err, data) {
        if (err) {res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));
    });
    router.get('/getTasks/:studentId', function(req, res) {
        dbLayer.getTasks(function (err, data) {
            if (err) {res.status(err.status || 400);
                res.send(JSON.stringify({error: err.toString()}));
                return;
            }
            console.log(data);
            res.header("Content-type","application/json");
            res.send(JSON.stringify(data));
        });
    });
});

module.exports = router;
