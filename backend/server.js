import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'
import db from './config/db.js'



const app = express()
db()
dotenv.config()
app.use(express.json())
app.use('/api/user', userRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} at ${PORT}`.grey))
