import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const GetList = createAsyncThunk("Tasks/GetList", async ()=>{

    return axios.get("http://localhost:9000/ListTask")
    .then(res => {return res.data})
    .catch(err => {return err.data.message})

})

 

const TaskSlice = createSlice({
    name : "Tasks",
    initialState : {
        list : [],
        Status : "",
        Erreur : ""
    },
    reducers : {

    },
    extraReducers : {
        [GetList.fulfilled] :  (state,action)=>{
          
            state.list = action.payload
            state.Status = "Success"
        },
        [GetList.pending] : (state)=>{
            state.Status = "Pending"
        },
        [GetList.rejected] : (state,action)=>{
        state.Erreur = action.payload
          state.Status = "Rejected"
        }
    }

})

export default TaskSlice.reducer