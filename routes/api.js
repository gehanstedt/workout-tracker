const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put("/api/workouts/:id", (req, res) => {
  console.log (`In route Put /api/workouts/:id`);
  console.log (`ID:  ${req.params.id}`);

  const query = {
    _id: req.params.id
  };

  const updateString = {
    $push: {
      exercises: req.body
    }
  };
  
  Workout.updateOne(query, updateString)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log (err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log (`In route POST /api/workouts/`);
  var body = req.body;
  body.date = new Date().setDate(new Date().getDate());
  console.log (body);

  Workout.create(body)
    .then(dbWorkout => {
      console.log (`Workout added via POST /api/workouts`);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log (`Workout add FAILED via POST /api/workouts`);
      res.status(400).json(err);
      console.log (err);
    });
});



router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.findOne({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
