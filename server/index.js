
const express = require("express")
const cors = require("cors")
const UserModel = require("./Modules/User")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://localhost/Todos" )

app.listen(9000, ()=> console.log("server running on port 9000..."))



app.post("/AddUser", (req,res)=>{

    const user = req.body

})