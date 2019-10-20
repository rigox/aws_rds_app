const express =  require("express")
const app = express()
const dotenv  = require("dotenv")
const PORT =  process.env.PORT  || 5000
const mysql =  require("mysql")

//load enviromental variables

dotenv.config({path:'./config/config.env'})

var connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,

});


connection.connect()

connection.query('select * from users',function(err,results,fields  ){
  if(err){throw err}
   console.log('results ' ,  results)
});

//apply middleware
app.use(express.json(),express.urlencoded({extended:true}))


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)   
});