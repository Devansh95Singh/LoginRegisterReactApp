import User from '../models/userModel.js'
import generateToken from '../utils/generate.js'
import bcrypt from 'bcryptjs'


const loginUser = async (req, res) => {
    //console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({ email })
    //console.log(user)
    const matchPassword = (password) => {
        const confirmPassword = user.password
        return bcrypt.compare(password, confirmPassword)
    }
    if (user && (await matchPassword(password)))
    {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)
        })    
    } else {
       res.json({message:'Email or Password is incorrect'})
    }
    
}
export default loginUser