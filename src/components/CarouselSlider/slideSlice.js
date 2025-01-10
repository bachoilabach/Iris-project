import { createSlice } from "@reduxjs/toolkit";
import { slides } from "../../json/slides";

const slideSlice = createSlice({
    name: "slide",
    initialState: slides,
    reducers: {}
})

export default slideSlice