const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://biwash10:biwash20@cluster0.m1wcyog.mongodb.net/MultistepFormData')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));