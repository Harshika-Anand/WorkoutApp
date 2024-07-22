//lets create all routes here using express router
const express=require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')


const router=express.Router()

//to GET all workouts
router.get('/',getWorkouts) //yeh hai for /api/workouts so yeh saare fire kardegga


//router.get('/hello',()=>{}) //this function would be fired if went to /api/workouts/hello


//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//Update a new workout
router.patch('/:id',updateWorkout)
//we have to send some data to the server for post and patch, this data we can access from the middleware, that is express.json

module.exports=router 