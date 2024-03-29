
const express = require("express")
const cors = require("cors")
const UserModel = require("./Modules/User")
const mongoose = require("mongoose")
const TaskModel = require("./Modules/Task")

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://localhost/Todos" )

app.listen(9000, ()=> console.log("server running on port 9000..."))



app.post("/AddUser", async (req,res)=>{

    const user = req.body
  
    try{
    const result = await UserModel.findOne({Email :user.Email })
    if(result){
        res.send("Cet utilisateur existe deja")
    }else{
        const newuser = new UserModel(user)
        const element = await newuser.save()
        res.send("Added")
    }

}catch(err){console.log(err)}

})


app.get("/ListTask/user/:iduser", async (req,res)=>{

    const id = req.params.iduser

    const test = await UserModel.findOne({_id : id})

    if(test){
        const result = await TaskModel.find({user : id})
        res.send(result)
    }else{
        res.send("user doesn t")
    }

   

    

})

