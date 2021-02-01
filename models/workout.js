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
},
{
  toJSON: {
    // Include any virtual properties when data is requested to allow below code to be properly called
    virtuals: true
  }
});

// Adds a dynamically-created property to schema to return totalDuration
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
