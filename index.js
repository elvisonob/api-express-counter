//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())


//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`)
})

let counter=0

app.get('/counter', (req, res) => {
    res.json({counter:counter})
})

app.post('/counter/increment', (req, res)=> {
    res.json({counter:counter++})
})

app.post('/counter/decrement',(req, res)=> {
    res.json({counter:counter--})
})

app.post('/counter/double', (req, res)=> {
    res.json({counter:counter*=2})
})

app.delete('/counter', (req, res)=> {
    res.json({counter:counter*0})
})

app.put('/counter', (req, res)=>{
    const queryParameter=req.query
    res.json({queryParameter})
})

