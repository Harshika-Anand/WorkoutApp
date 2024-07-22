require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
const cors=require("cors")

//express app
const app=express()

app.use(cors({origin:"input the localhost in frontend"}))

app.use(express.json())//we can now access data in the request handler.
app.use((req,res,next)=>{  //global middleware next is for moving on to the next middleware, must be invoked.
   console.log(req.path,req.method); //we get /GET of course!
   next()
})

//routes
app.use('/api/workouts',workoutRoutes)  //takes all routes and uses them on the app, when we fire a req to this path, then use these routes

//connect to db
mongoose.connect(process.env.MONGO_URI) //its asyn,takes time and returns a promise
.then(()=>{  //shows kya karemge after connecting to the database
  //listen for requests
app.listen(process.env.PORT,()=>{
  console.log('Connected to db, listening on port', process.env.PORT);  //only listen to req once connected to db
})
})
.catch((error)=>{
  console.log(error);
})