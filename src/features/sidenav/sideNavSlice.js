import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hostHeight: 200,
    backupModal: {open: false},
    queryPlanModal: {open: false},
    createDBUser: {open: false},
    paramDump: {open: false},
    planDump: {open: false},
    optimizeDB: {open: false},

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
        },
        setParamDump: (state, action) => {
            state.paramDump = action.payload
        },
        setPlanDump: (state, action) => {
            state.planDump = action.payload
        },
        setOptimizeDB: (state, action) => {
            state.optimizeDB = action.payload
        }

    },
})

export const { setHostHeight, setBackupModal,
    setQueryPlanModal, setCreateDBUser,
    setParamDump, setPlanDump, setOptimizeDB} = sideNavSlice.actions
export default sideNavSlice.reducer
