import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDBUsers: (state, action) => {
            state.users = action.payload
        }
    },
})

export const { setDBUsers} = userSlice.actions
export default userSlice.reducer
