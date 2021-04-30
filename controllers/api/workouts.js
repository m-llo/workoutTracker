const router = require("express").Router();
const Workout = require("../../models/Workout");
 

router.get("/", (req, res) => {
  Workout.findOne({}).sort({ date: -1 })
  .then(dbWorkout => {
    // console.log("workout data", dbWorkout);
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err);
  
  });
});

router.get("/range", (req, res) => {
 console.log(
"range route hit line 27"
 )
  Workout.aggregate([
    {
      $addFields: {
      totalDuration: {$sum: "$exercises.duration"},
      totalWeight: {$sum: "$exercises.weight"}
    }
  },
  ])
  Workout.find({$range: [ 1, 7, 1 ]}).sort({ date: -1})
    .then(dbWorkout => { 
      console.log("new dbWorkout line 33: " , dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  Workout.findById(id)
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err);
  });
});


router.post("/", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
       res.status(200)
      //  json(dbWorkout)
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  console.log(req.body)
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, { new: true })
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.status(200)
      // json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})





module.exports = router;