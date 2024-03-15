import { configureStore } from "@reduxjs/toolkit";
import personalDetailsSlice from "./slices/personalDetailsSlice";
import experienceSlice from "./slices/experienceSlice";

const store = configureStore({
    reducer: {
        personalDetails: personalDetailsSlice,
        experiences: experienceSlice
    }
})

export default store;