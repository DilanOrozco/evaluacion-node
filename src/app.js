require('dotenv').config()
const app = require('./interfaces/server')
const connectDB = require('./config/db')

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`✅ Corriendo servidor desde http://localhost:${process.env.PORT}`)
    })
})