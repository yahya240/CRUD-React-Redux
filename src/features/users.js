import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = [{name:'John Smith',job:'Mobile Developer'},{name:'Mikel Scofild',job:'Civil Engineer'}]

export const usersSlice = createSlice({
    name:'users',
    initialState:{value:initialStateValue},
    reducers:{
        addUser:(state,action)=>{
            state.value = [...state.value,action.payload]
        },
        updateUser:(state,action)=>{
            let theUser = state.value.find((user)=>user.name === action.payload.name)
            theUser.name = action.payload.newValue
        },
        deleteUser:(state,action)=>{
            state.value = state.value.filter((user)=> user.name !== action.payload)
        }
    }
})

export const {addUser,updateUser,deleteUser} = usersSlice.actions;

export default usersSlice.reducer;