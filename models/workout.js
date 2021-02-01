const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
      },
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
      },
      weight: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Enter duration of the exercise in minutes",
      },
      distance: {
        type: Number,
      },
    }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
