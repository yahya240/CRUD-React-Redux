import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../features/users'

function AddUsers() {
    const dispatch = useDispatch();
    const [user,setUser] = useState({name:'',job:''})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user,[name]:value})
        console.log(user);
    }

    const handleAdd = ()=>{
        dispatch(addUser(user))
        setUser({name:'',job:''})
    }
  return (
    <div>
        <input type='text' name='name' value={user.name} onChange={handleChange}placeholder='Name'></input>
        <input type='text' name='job' value={user.job} onChange={handleChange}placeholder='Job'></input>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddUsers