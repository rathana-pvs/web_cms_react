import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hostHeight: 200,
    backupModal: {open: false},
    queryPlanModal: {open: false},
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
        }

    },
})

export const { setHostHeight, setBackupModal, setQueryPlanModal} = sideNavSlice.actions
export default sideNavSlice.reducer
