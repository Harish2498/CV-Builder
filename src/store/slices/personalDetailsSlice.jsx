import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    surname: '',
    city: '',
    country: '',
    pincode: '',
    contactNo: '',
    email: ''
}

export const personalDetailsSlice = createSlice({
    name: "personalDetails",
    initialState,
    reducers: {
        personalDetails: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { personalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;