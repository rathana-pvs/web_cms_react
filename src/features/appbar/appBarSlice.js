import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    hostConnection: {open: false},
    aboutCubrid: false,
    profile: false,
    updatePassword: false,
}

const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        setHostConnection: (state, action) => {
            state.hostConnection = action.payload;
        },
        setAboutCubrid: (state, action) => {
            state.aboutCubrid = action.payload;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setUpdatePassword: (state, action) => {
            state.updatePassword = action.payload;
        }

    },
})

export const {setHostConnection, setAboutCubrid, setUpdatePassword, setProfile} = appBarSlice.actions
export default appBarSlice.reducer
