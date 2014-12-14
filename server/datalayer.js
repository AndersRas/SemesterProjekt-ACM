/**
 * Created by Marcus on 14-12-2014.
 */
var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;
var periodModel = require('./model/db').periodModel;
var pointModel = require('./model/db').pointModel;

function getClasses(callback)  {
    classesModel.find({}, function (err, data) {
        if (err)
            callback(err);
        else {
            callback (null, data)
        }
    });

};



function getPeriods(callback){
    periodModel.find({}, function(err,data){
        if(err)
            callback(err);
        else{
            callback(null,data)
        }
    });
};

function getPeriod(periodNumber,callback){
    periodModel.find({number:periodNumber})
        .exec(function(err,data){
            if(err)
                callback(err);
            else{
                callback(null,data);
            }
        });
};

function getTasksInPeriods(period, callback){
    taskModel.find({periodId:period})
        .populate('period.name')
        .exec(function (err, data) {
            if(err)
                callback(err);
            else{
                callback(null,data);
            }
        });
};


function getStudent(userName,callback) {
    studentsModel.find({userName:userName})
        //.populate('classId')
        .exec(function(err, data){
            if (err) callback(err);
            else {
                callback (null, data);
            }

        });

};

function getStudents(callback) {
    studentsModel.find({}, function (err, data) {
        if (err) callback(err);
        else {
            callback (null, data);
        }
    });
};

function getStudentByClass(classId,callback) {
    studentsModel.find({classId:classId})
        //.populate('classId')
        .exec(function(err, data){
            if (err) callback(err);
            else {
                callback (null, data);
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

function getTaskById(_id, callback){
    taskModel.find({_id:_id})
        .exec(function(err, data){
            if (err)
                callback(err);
            else {
                callback (null, data);
            }

        });
};

function createStudent(student, callback){
    var json = new model.studentsModel(student);
    json.save(function(err, data){
        if (err)
            callback(err);
        else{
            callback(null, data);
        }
    });
};

function getStudyPointById(_id,callback){
    pointModel.find({_id:_id})

        .exec(function(err, data){
            if(err)
                callback(err);
            else{
                callback(null,data)
            }
        });
};

function getStudentsStudyPointsId(studentId,callback){
    pointModel.find({studentId:studentId})

        .exec(function(err, data){
            if(err)
                callback(err);
            else{
                callback(null,data)
            }
        });
};


module.exports = {
    createStudent: createStudent,
    getStudents: getStudents,
    getClasses: getClasses,
    getStudent: getStudent,
    getTasks: getTasks,
    getTaskById: getTaskById,
    getPeriods: getPeriods,
    getPeriod: getPeriod,
    getTasksInPeriods: getTasksInPeriods,
    getStudyPointById: getStudyPointById,
    getStudentsStudyPointsId: getStudentsStudyPointsId,
    getStudentByClass: getStudentByClass
};