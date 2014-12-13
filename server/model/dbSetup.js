/**
 * Created by Christoffer on 13-12-2014.
 */

"use strict";

var model = require("./db");
function remove() {
    model.classModel.remove({}).exec();
    model.pointModel.remove({}).exec();
    model.taskModel.remove({}).exec();
    model.periodModel.remove({}).exec();
    model.teacherScema.remove({}).exec();
    model.studentModel.remove({}).exec();
}

function insert() {
    var classes = [ {
        _id: 1,
        name: "datA"
        }, {
        _id: 2,
        name: "datB"
        }];

    var points = [{
        "_id": 1,
        "value": 2,
        "studentId": 1,
        "taskId" : 1
        }, {
        "_id": 2,
        "value": 5,
        "studentId": 2,
        "taskId" : 1
        }, {
        "_id": 3,
        "value": 3,
        "studentId": 3,
        "taskId" : 1
        }, {
        "_id": 4,
        "value": 1,
        "studentId": 4,
        "taskId" : 2
        }];

    var periods = [{
        "_id": 1,
        "number": 1,
        "name": "Java programming",
        "startDate": "2015-01-20T17:37:23-08:00",
        endDate: "2015-01-20T17:37:23-08:00",
        classId: 1
        }, {
        "_id": 2,
        "number": 2,
        "name": "html programming",
        "startDate": "2015-01-20T17:37:23-08:00",
        endDate: "2015-01-20T17:37:23-08:00",
        classId: 2
        }];

    var tasks = [{
        "_id": 1,
        "name": "Asssignment",
        "maxPoints": 10,
        "description": "Do work",
        "periodId": 1
        }, {
        "_id": 2,
        "name": "Homework",
        "maxPoints": 5,
        "description": "Do part 1 to 3",
        "periodId": 2
        }, {
        "_id": 3,
        "name": "Do something",
        "maxPoints": 3,
        "description": "Do something",
        "periodId": 3
        }];

    var teachers = [{
        "_id": 1,
        "firstName": "Lars",
        "lastName": "mortensen",
        "userName": "lam",
        "password": "worktime",
        "classId": 1
        }, {
        "_id": 2,
        "firstName": "TesterTeacher",
        "lastName": "teachTest",
        "userName": "testTeacher",
        "password": "test",
        "classId": 2
}];

    var students = [{
        "_id": 1,
        "firstName": "Anders",
        "lastName": "Rasmussen",
        "userName": "And",
        "password": "ripraprup",
        "classId": 1
        }, {
        "_id": 2,
        "firstName": "Christoffer",
        "lastName": "Vesterhøj",
        "userName": "sweps",
        "password": "password",
        "classId": 1
        }, {
        "_id": 3,
        "firstName": "Marcus",
        "lastName": "Somelastname",
        "userName": "marc",
        "password": "theawesome",
        "classId": 2
        }, {
        "_id": 4,
        "firstName": "TesterStudent",
        "lastName": "StudTest",
        "userName": "testStudent",
        "password": "test",
        "classId": 2
    }];

    var classessx = 0;
    classes.forEach(function (classes) {
        classes.classId = 1;
        var newClasses = new model.classModel(classes);
        newClasses.save();
        classessx++;
    });
    console.log(classessx + " classes saved");

    var studentsx = 0;
    students.forEach(function (student) {
        student.classId = 1;
        var newStudent = new model.studentModel(student);
        newStudent.save();
        studentsx++;
    });
    console.log(studentsx + " students saved");

    var teachersx = 0;
    teachers.forEach(function (teachers) {
        teachers.classId = 1;
        var newTeacher = new model.teacherModel(teachers);
        newTeacher.save();
        teachersx++;
    });
    console.log(teachersx + " teachers saved");

    var periodsx = 0;
    periods.forEach(function (period) {
        period.classId = 1;
        var newPeriod = new model.periodModel(period);
        newPeriod.save();
        periodsx++;
    });
    console.log(periodsx + " periods saved");

    var tasksx = 0;
    tasks.forEach(function (task) {
        task.periodId = 1;
        var newTask = new model.taskModel(task);
        newTask.save();
        tasksx++;
    });
    console.log(tasksx + " tasks saved");

    var pointsx = 0;
    var qwert = 1;
    points.forEach(function (point) {
        point.studentId = qwert++;
        var newPoint = new model.pointModel(point);
        newPoint.save();
        pointsx++;
    });
    console.log(pointsx + " points saved");
}

insert();