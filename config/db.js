const mongoose =  require("mongoose")

const connectDB =  async() => {

  try {
    await  mongoose.connect(process.env.mongo_uri,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
  } catch (err) {
        console.log(err)
  }

}

module.exports =  connectDB