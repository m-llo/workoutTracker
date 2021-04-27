const router = require("express").Router();
// const Workout = require("../models/Workout");
// const Exercise = require("../models/Exercise")
// const db = require("../models");
const path = require("path");


// sendfile
// path.join(__dirname, "../pu")

router.get("/exercise", (req, res) => {
  //   const options = {
  //     root: path.join(__dirname, "../public/")
  // };
  //   const fileName = 'exercise.html'
  res.sendFile(path.join(__dirname, "../public/exercise.html", function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("sent")
    }
  })
  )
});


router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;