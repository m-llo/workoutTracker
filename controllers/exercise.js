const router = require("express").Router();
const path = require("path");




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


module.exports = router;