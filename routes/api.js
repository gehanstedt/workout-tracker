const router = require("express").Router();
const Workout = require("../models/workout.js");

// PUT route for adding exercises to a workout
router.put("/api/workouts/:id", (req, res) => {
  console.log (`In route Put /api/workouts/:id`);
  console.log (`ID:  ${req.params.id}`);

  // Build update query
  const query = {
    _id: req.params.id
  };

  // Build update
  const updateString = {
    $push: {
      exercises: req.body
    }
  };
  
  // Execute updateOne via Workout model
  Workout.updateOne(query, updateString)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log (err);
    });
});

// POST route for adding a new workout
router.post("/api/workouts", (req, res) => {
  console.log (`In route POST /api/workouts/`);
  var body = req.body;

  // Set body.date to the current date
  body.date = new Date().setDate(new Date().getDate());
  console.log (body);

  // Execute create via Workout model
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

// GET route to return the most recent workout
router.get("/api/workouts", (req, res) => {
  console.log (`In GET /api/workouts`);
  //Using find instead of findAll so we return an array with one object instead of just an object
  Workout.find({})
    .sort({ date: -1 })
    .limit(1)
    .then(dbWorkout => {
      console.log (dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log (`No workouts found`)
      res.status(400).json(err);
    });
});

// GET route to return all workouts
router.get("/api/workouts/range", (req, res) => {
  console.log (`In GET /api/workouts/range`);

  //Use find via the Workout model to find all workouts
  Workout.find({})
    .then(dbWorkout => {
      console.log (dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log (`No workouts found`)
      res.status(400).json(err);
    });
});

module.exports = router;
