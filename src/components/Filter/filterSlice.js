import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "all"
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export default filterSlice