import mongoose from 'mongoose'
import users from './data/users.js'
import User from './models/userModel.js'
import db from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
db()
const importData = async () => {
    try {
        await User.deleteMany()
        const createUser = User.insertMany(users)
        console.log('data imported')
    } catch (error) {
        console.log('error', error)
    }
    

}
importData()