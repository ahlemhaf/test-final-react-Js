import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate=useNavigate()
const [register,setRegister]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
})

const handleChange=(e)=>{
    const {id,value}=e.target
    setRegister(()=>{
return { ...register,[id]:value}
    })
}
const handleSubmit=async ()=>{
    console.log(register);

    const users = await axios.get('http://localhost:3000/users');
    const trouve = await users.data.find((user) => user.email === register.email)
    if (trouve !== undefined) {
        alert('email est déjà utilisé !')
    }
    else {
        await axios.post('http://localhost:3000/users', register)
        navigate('/liste')
    }


}

  return (
    <div className='d-flex flex-column align-items-center '>
            <h1>Register </h1>
            <form className='p-3 col-6'>
                <div className="form-group">
                    <label forhtml="name" className="form-group"> Name: </label>
                    <input type="text" onChange={handleChange} className="form-control" id="firstName"  />
                </div>
                <div className="form-group">
                    <label forhtml="prenom">Last Name: </label>
                    <input type="text" onChange={handleChange} className="form-control" id="lastName"  />
                </div>
                <div className="form-group">
                    <label forhtml="email">Email</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label forhtml="password">Password</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password"  />
                </div>

              
                <button type="button" onClick={handleSubmit} className="btn btn-primary m-2" >Submit</button>
            </form>
          
        </div>
  )
}

export default Register
