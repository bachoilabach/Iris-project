import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../components/IconAutoScroll/iconSlice";
import memeberSlice from "../components/MemberCard/memberSlice";

const store = configureStore({
    reducer: {
        icons: iconSlice.reducer,
        members: memeberSlice.reducer
    }
})
export default store