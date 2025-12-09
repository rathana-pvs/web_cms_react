import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hostConnection: {open: false},
}

const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        setHostConnection: (state, action) => {
            state.hostConnection = action.payload;
        }
    },
})

export const {setHostConnection} = appBarSlice.actions
export default appBarSlice.reducer
