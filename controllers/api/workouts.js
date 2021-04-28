const router = require("express").Router();
const Workout = require("../../models/Workout");
// const Exercise = require("../../models/Exercise")
const db = require("../../models");


router.get("/", (req, res) => {
  Workout.findOne({}).sort({ date: -1 })
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.status(200).json(dbWorkout)
  })
  .catch(({ message }) => {
    console.log(message);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id
  Workout.findById(id)
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.status(200).json(dbWorkout)
  })
  .catch(({ message }) => {
    console.log(message);
  });
});


router.post("/", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.status(200).json(dbWorkout)
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/:id", (req, res) => {
  console.log(req.body)
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.get("/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

})




module.exports = router;