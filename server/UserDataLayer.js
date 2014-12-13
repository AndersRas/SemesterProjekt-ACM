/**
 * Created by Marcus on 14-12-2014.
 */
var classesModel = require('./model/db').classesModel;
var studentsModel = require('./model/db').studentsModel;
var taskModel = require('./model/db').taskModel;

var periodModel = require('./model/db').periodModel;
var pointModel = require('./model/db').pointModel;

function getStudent(userName,callback) {
    studentsModel.find({userName: userName})
        .exec(function (err, data) {
            if (err) callback(err);
            else {
                callback(null, data);
            }

        });
};
function getTasks(callback) {
    taskModel.find({}, function(err,data){
        if(err)
            callback(err);
        else{
            callback(null,data)
        }
    });
};
function getClass(callback){
    classesModel.find({}, function(err, data){
        if(err)
            callback(err);
        else{
            callback(null, data)
        }
    });
};

module.exports = {
    getStudent: getStudent,
    getTasks: getTasks,
    getClass: getClass
};