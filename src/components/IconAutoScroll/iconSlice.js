import { createSlice } from "@reduxjs/toolkit";
import { listIcon } from "../../json/listIcon";

const iconSlice = createSlice({
    name: 'icons',
    initialState: listIcon,
    reducers: {}
})

export default iconSlice