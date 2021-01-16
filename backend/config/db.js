import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const db = async () => {
    try {
        const connectDb = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`Database connected ${connectDb.connection.host}`)
    } catch (error) {
        console.log(`Database not connected ${error}`)
    }
}
export default db

