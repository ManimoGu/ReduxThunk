import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./Reducers/TaskReducer"

const Store  = configureStore({
    reducer: {

        Tasks : TaskReducer

    }
})

export default Store