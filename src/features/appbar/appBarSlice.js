import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hostConnection: {open: false},
    aboutCubrid: false
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
        }
    },
})

export const {setHostConnection, setAboutCubrid} = appBarSlice.actions
export default appBarSlice.reducer
