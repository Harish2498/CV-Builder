import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    experiences: [
        // {
        //     id: null,
        //     jobTitle: '',
        //     employer: '',
        //     city: '',
        //     country: '',
        //     joiningDate: '',
        //     leavingDate: ''
        // }
    ]
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        addExperience: (state, action) => {
            const experience = {
                id: nanoid(),
                jobTitle: action.payload.jobTitle,
                employer: action.payload.employer,
                city: action.payload.city,
                country: action.payload.country,
                joiningDate: moment(action.payload.date[0].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY'),
                leavingDate: moment(action.payload.date[1].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY')
            }
            // console.log(experience);
            state.experiences.push(experience);
        }

        // removeExperience:(state)
    }
})

export const {addExperience} = experienceSlice.actions;
export default experienceSlice.reducer;