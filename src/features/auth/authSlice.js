import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isAuthenticated: false,
    token: localStorage.getItem('token'),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            console.log(action.payload)
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
        },
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        setLogout: (state) => {
            state.user = null
            state.isAuthenticated = false
            localStorage.removeItem("token")
        },
    },
})

export const { setLogin, setUser,  setLogout} = authSlice.actions
export default authSlice.reducer
