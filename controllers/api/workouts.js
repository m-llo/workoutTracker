const router = require("express").Router();
const Workout = require("../../models/Workout");
const Exercise = require("../../models/Exercise")
const db = require("../../models");


router.get("/workouts", (req, res) => {
  Workout.findOne({}).sort({ date: -1 }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  })
});

router.get("/workouts/:id", (req, res) => {
  const id = req.params.id
  Workout.findById(id, function (err, workout) {
    if (err) {
      console.log(err);
    } else {
      res.json(workout);
    }
  }
  )
});


router.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.status(200)
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/workouts", (req, res) => {
  Exercise.create(req.body)
    .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercise: _id } }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.put("/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

})



module.exports = router;