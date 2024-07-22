const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String, // Correct schema type
    required: true
  },
  reps: { // Repetitions
    type: Number, // Corrected type
    required: true
  },
  load: {
    type: Number,
    required: true 
  }
}, { timestamps: true });  // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Workout', workoutSchema); // This will pluralize the model name and create a collection in the db
