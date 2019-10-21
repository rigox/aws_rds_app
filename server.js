const express =  require("express")
const app = express()
const dotenv  = require("dotenv")
const PORT =  process.env.PORT  || 5000
const mysql =  require("mysql")
const cors =  require("cors")

//load enviromental variables

dotenv.config({path:'./config/config.env'})
//apply middleware
app.use(express.json(),express.urlencoded({extended:true}))
app.use(cors())

var connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,

});
//test


const middle = () =>{
       console.log("awesome")
}

connection.connect()

app.post('/api/user/register',(req,res)=>{

        const  {name , email , password} = req.body
        connection.query('insert into users(name,email,password) values(?,?,?)' ,[name,email, password], function(err,results,fiels){
            if(err){throw err}
            console.log("records inserted" , results)
        });



});






app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)   
});