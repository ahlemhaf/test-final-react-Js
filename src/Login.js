import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setLoginForm(() => {
            return { ...loginForm, [id]: value }
        })
    }
    const handleSubmit = async () => {
        const users = await axios.get('http://localhost:3000/users')
        const trouve = users.data.find((user) =>
            user.email === loginForm.email && user.password === loginForm.password);
        if (trouve) {
            navigate('/liste')
        }
        else {
            alert('verifier votre email et votre mot de passe ');
        }
    }

    return (
        <div className='d-flex flex-column align-items-center '>
            <h1>Login </h1>
            <form className='p-3 col-6'>
                <div className="form-group">
                    <label forhtml="email">Email</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label forhtml="password">Password</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" />
                </div>

                <button type="button" onClick={handleSubmit} className="btn btn-primary m-2" >Submit</button>

            </form>

        </div>
    )
}

export default Login
