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

const FacultySchema = new Schema({
  subjects: [SubjectSchema]
}, { _id : false });

const UserSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  dateOfBirth: String,
  address: String,
  projects: [ProjectSchema],
  facultySubjects: Schema.Types.Mixed
});

module.exports = mongoose.model('User', UserSchema);