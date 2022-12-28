import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const GetList = createAsyncThunk("Tasks/GetList", async ()=>{

 return axios.get("http://localhost:9000/ListTask")
 .then(res => {return res.data} )
 .catch(err =>{return err.data})

})

const TaskSlice = createSlice({
    name : "Tasks",
    initialState : {
        list : [],
        Erreur : "",
        status : ""
    },
    reducers : {
    
    },
    extraReducers : {
        [GetList.fulfilled] : (state,action)=>{
            state.list = action.payload
            state.status = "Success"
        },
        [GetList.rejected] : (state, action)=>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [GetList.pending] : (state)=>{
            state.status = "Pending"
        }
    }

})

export default TaskSlice.reducer