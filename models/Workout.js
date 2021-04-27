const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
//   name: {
//     type: String,
//     unique: true
//   },
date:{
type: Date
},
exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],
  totalDuration:{
    type: Number
  },
  numExercises:{
    type: Number

  },
  totalWeight:{
    type: Number

  },
  totalSets:{
    type: Number

  },
  totalReps:{
    type: Number
  },
  totalDistance:{
    type: Number
  },
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
