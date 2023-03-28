import express from 'express'
import { v4 as uuidv4 } from 'uuid';




const routers = express.Router()

const users = [
    {
        name:"mon",
        age:"90",
    
    },
    {
        name:"monds",
        age:"40",
    }
]

//All users in this module starting here with /users
routers.get('/',(req,res)=>{
    res.send(users)
})

 routers.post('/',(req,res)=>{
    const user = req.body
    // const userId = uuidv4();
    const userWithId = {...user, Id:uuidv4()}
    users.push(userWithId)
    res.send(user)
})


export default routers