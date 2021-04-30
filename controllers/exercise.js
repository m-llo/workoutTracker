const router = require("express").Router();
const path = require("path");
const Workout = require("../models/Workout");



// router.get("/", (req, res) => {
//   Workout.findOne({}).sort({ date: -1 })
//   .then(dbWorkout => {
//     console.log("workout data", dbWorkout);
//     res.status(200)
//   //  .json(dbWorkout)
//   })
//   .catch(err => {
//     res.json(err);
   
//   });
// });


router.get("/exercise", (req, res) => {

  res.sendFile(path.join(__dirname, "../public/exercise.html"), function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("sent")
    }
  })
});


router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// router.get("/range", (req, res) => {
//   Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });

// })

module.exports = router;