const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      day: {
        type: Date,
      }

    }
  ],
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
