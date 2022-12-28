
const express = require("express")
const cors = require("cors")
    
const app = express()

app.use(cors())

app.listen(9000, ()=> console.log("server running on port 9000..."))

let tasks = [
    {
        titre : "Coding",
        status : false
    },
    {
        titre : "Reading",
        status : false
    }

]

app.get("/ListTask", (req,res)=>{
  
    res.send(tasks)
    
})


app.get("/addTask", (req,res)=>{

    tasks.push({titre : "Writing", status : false})
    res.send(tasks)

})

