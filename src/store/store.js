import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../components/IconAutoScroll/iconSlice";

const store = configureStore({
    reducer: {
        icons: iconSlice.reducer
    }
})
export default store