import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "datdev",
        age: "26",
        about: "i'm a good boy",
        img: " https://i.redd.it/ksmb0m02ppy51.png",
        theme: "#ff9051",
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.img = action.payload.img;
            state.theme = action.payload.theme;
        },
    },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
