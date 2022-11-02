import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateUser,deleteUser} from '../features/users'

function UpdateUser({name}) {
    const [newValue, setNewValue] = useState('')
    const dispatch = useDispatch()
    
    const handleUpdate =()=>{
        dispatch(updateUser({name,newValue}))
        setNewValue('')
    }
  return (
    <div>
        <input type='text' value={newValue} onChange={(e)=>setNewValue(e.target.value)}></input>
        <button type='button' onClick={handleUpdate}>Update</button>
        <button type='button' onClick={()=>dispatch(deleteUser(name))}>Delete</button>
    </div>
  )
}

export default UpdateUser