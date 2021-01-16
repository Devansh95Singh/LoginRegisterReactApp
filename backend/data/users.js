import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Devansh',
        email: 'dev@example.com',
        password: bcrypt.hashSync('123', 10)
    },
    {
        name:'Rahul',
        email: 'r@example.com',
        password: bcrypt.hashSync('123', 10)
    },
    {
        name:'Anonymous',
        email: 'a@example.com',
        password: bcrypt.hashSync('123', 10)
    }
]
export default users