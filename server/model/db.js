var mongoose = require( 'mongoose' );


var dbURI;

//This is set by the backend tests
if( typeof global.TEST_DATABASE != "undefined" ) {
  dbURI = global.TEST_DATABASE;
}
else{
  dbURI = 'mongodb://sem3projekt:login@ds051990.mongolab.com:51990/schooldb';
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  global.mongo_error = "Not Connected to the Database";
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});


var studentSchema = new mongoose.Schema({
  _id : Number,
  firstName : String,
  lastName : String,
  userName : String,
  passWord : String,
  classId : {type: Number, ref: 'class'}
});

var teacherSchema = new mongoose.Schema({
  _id : Number,
  firstName : String,
  lastName : String,
  userName : String,
  passWord : String,
  classId : {type: Number, ref: 'class'}
});

var pointSchema = new mongoose.Schema({
  _id : Number,
  value : Number,
  studentId : {type: Number, ref: 'student'},
  taskId : {type: Number, ref: 'task'}
});

var taskSchema = new mongoose.Schema({
  _id : Number,
  name : String,
  maxPoints : Number,
  description : String,
  periodId : {type: Number, ref: 'period'}
});

var periodSchema = new mongoose.Schema({
  _id : Number,
  number : Number,
  name : String,
  startDate : Date,
  endDate : Date,
  classId : {type: Number, ref: 'classes'}
});

var classSchema = new mongoose.Schema({
  _id : Number,
  name : String
});

exports.studentModel = mongoose.model('Student', studentSchema, 'student');
exports.teacherModel = mongoose.model('Teacher', teacherSchema, 'teacher');
exports.pointModel = mongoose.model('Point', pointSchema, 'point');
exports.taskModel = mongoose.model('Task',taskSchema, 'task');
exports.periodModel = mongoose.model('Period', periodSchema, 'period');
exports.classModel = mongoose.model('Class', classSchema, 'class');


