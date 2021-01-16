import express from 'express'
import loginUser from '../controller/userControllers.js'

const Router = express.Router()

Router.post('/login',loginUser)

export default Router