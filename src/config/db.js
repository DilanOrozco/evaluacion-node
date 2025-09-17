const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("✅ conexión exitosa a la base de datos")
    }catch(err){
        console.log('❌ error al conectar. ', err.message)
        process.exit(1)
    }
}

module.exports = connectDB