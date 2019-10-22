const express  = require("express")
const dotenv =  require("dotenv")
const cors =  require("cors")
const connectDB =  require("./config/db");
const app =  express()

const  user =  require("./routes/user")


dotenv.config({path:'./config/config.env'})

connectDB();

const PORT  =  process.env.PORT || 5000

//load middleware
app.use(express.json() , express.urlencoded({extended:true}))
app.use(cors())

//load routes
app.use('/api/user', user)


app.listen(PORT , ()=>{
      console.log(`listening on  PORT ${PORT}`)
})




