import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'

const app = express()


// MIDDLEWARE // 
app.use(express.json())
dotenv.config()


// ROUTES // 

app.use('/auth' , authRouter )


const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=>{
    console.log(`app is listing to prot${PORT}`);
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`app is connected to dataBAse`);
})

