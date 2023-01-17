const mongoose = require("mongoose")

const Task = mongoose.Schema({

    titre : {

        type : String,
        required : true

    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    }

})

const TaskModel = mongoose.model("Task", Task)

module.exports = TaskModel