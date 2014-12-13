var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var period = mongoose.model('Period');
var point = mongoose.model('Point');
var tasks = mongoose.model('Task');
var classes = mongoose.model('Class');
var student = mongoose.model('Student');

var dbLayer = require('../dataLayer');

/* GET A User From The DataBase */
router.get('/getStudents', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;

    dbLayer.getStudent(function (err, data) {
      if (err) {
        res.status(err.status || 400);
        res.send(JSON.stringify({error: err.toString()}));
        return;
      }
      console.log(data);
      res.header("Content-type","application/json");
      res.send(JSON.stringify(data));
    });


    router.get('/classes', function(req,res){
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
      }
      dbLayer.getClasses(function(err, data){
        if(err){
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

      });
    });
    router.get('/getStudyPointsId/:_id', function(req, res){
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" U have to be logget ind! But fungtion: getStudyPointById/STudiId didnt succed!(see model-->db.js for instructions)");
        return;
      }
      var requestedStudyId = req.params._id;
      dbLayer.getStudyPointById(requestedStudyId, function(err,data){
        if(err){
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

      });
      router.get('/getStudentsStudyPointsId/:studentId', function(req, res) {
        if (typeof global.mongo_error !== "undefined") {
          res.status(500);
          res.end("Error: " + global.mongo_error + " U have to be logget ind! But fungtion: getStudyPointById/STudiId didnt succed!(see model-->db.js for instructions)");
          return;
        }
        var studentId = req.params.studentId;
        dbLayer.getStudyPointByStudentId(studentId, function (err, data) {
          if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
          }
          res.header("Content-type", "application/json");
          res.send(JSON.stringify(data));

        });
      })

    });
    router.get('/getPeriods', function(req,res){
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
      }
      dbLayer.getPeriods(function(err, data){
        if(err){
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

      });
    });

    router.get('/getPeriods/:periodId', function(req, res) {
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a specifik period here, (see model-->db.js for instructions)");
        return;
      }
      var choosePeriodName = req.params.periodNumber;
      dbLayer.getPeriod(choosePeriodName,function (err, data) {
        if (err) {
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));
      });
    });
    router.get('/getTasks', function(req,res){
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
      }
      dbLayer.getTasks(function(err, data){
        if(err){
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

      });
    });
    router.get('/getTasksId/:_id', function(req, res) {
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
      }
      var requestedId = req.params._id;
      dbLayer.getTaskById(requestedId,function (err, data) {
        if (err) {
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));
      });
    });
    router.get('/getTasksPeriods/:_id', function (req, res) {
      var periodId = req.params._id;
      dbLayer.getTaskInPeriods(periodId,function (err, data) {
        if (err) {
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
      });
    });
    router.get('/getStudents/:student', function(req, res) {
      if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
      }
      var requestedStudent = req.params.student;
      dbLayer.getStudent(requestedStudent,function (err, data) {
        if (err) {
          res.status(err.status || 400);
          res.send(JSON.stringify({error: err.toString()}));
          return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));
      });
    });
}});

module.exports = router;
