import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hostHeight: 200,
    backupModal: {open: false},
    queryPlanModal: {open: false},
    createDBUser: {open: false},

}

const sideNavSlice = createSlice({
    name: 'sidenav',
    initialState,
    reducers: {
        setHostHeight: (state, action) => {
            state.hostHeight = action.payload
        },
        setBackupModal: (state, action) => {
            state.backupModal = action.payload
        },
        setQueryPlanModal: (state, action) => {
            state.queryPlanModal = action.payload
        },
        setCreateDBUser: (state, action) => {
            state.createDBUser = action.payload
        }

    },
})

export const { setHostHeight, setBackupModal,
    setQueryPlanModal, setCreateDBUser} = sideNavSlice.actions
export default sideNavSlice.reducer
