const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  description: String
});

const SubjectSchema = new Schema({
  name: String,
  marks: String
});

const SemesterSchema = new Schema({
  semester: [SubjectSchema]
});

const FacultySchema = new Schema({
  faculty: String,
  semesters: [SemesterSchema]
});

const UserSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  dateOfBirth: String,
  address: String,
  projects: [ProjectSchema],
  facultySubjects: [FacultySchema]
});

module.exports = mongoose.model('User', UserSchema);