import React from 'react'
import {useSelector} from 'react-redux'
import UpdateUser from './UpdateUser'

function Users() {
    const data = useSelector((store)=>store.users.value)
  return (
    <div>
      <h1>Users List</h1>
      {data.map((item,index)=>{
        return <div key={index} className='users-list'>
          <h2>Name: {item.name}</h2> 
          <h2>Job Title: {item.job}</h2>
          <UpdateUser name={item.name} />
        </div>
      })}  
    </div>
  )
}

export default Users