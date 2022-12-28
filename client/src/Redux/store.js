import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./Reducer"

const Store = configureStore({
    reducer : {
        Tasks : TaskReducer
    }
})

export default Store