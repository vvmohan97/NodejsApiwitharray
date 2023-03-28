import express from 'express';
import bodyParser from 'body-parser';
import usersRouts from './routs/users.js'

const app = express();

const PORT = 5000;

app.use(bodyParser.json())

app.use('/users', usersRouts)

app.get('/', (req,res) => {
    console.log('hello world')
    console.log(res,"------------")
    res.send("kutty")
})

app.listen(PORT,()=>{console.log(`file is running sucessfully ${PORT}`)})
