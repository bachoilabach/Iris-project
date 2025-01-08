import { createSlice } from "@reduxjs/toolkit";
import { listMember } from "../../json/listMember";

const memeberSlice = createSlice({
    name: 'members',
    initialState: listMember,
    reducers: {}
})

export default memeberSlice