import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Ajout() {
  const navigate=useNavigate();
  const[listForm,setListForm]=useState({
    Name:'',
    Description:''
  })

  const handleChange=(e)=>{
    const {id,value}=e.target
    setListForm(()=>{
      return{...listForm,[id]:value}
    })
  }

  const handleSubmit=async()=>{
    const todo=await axios.post('http://localhost:3000/todo',listForm)
    console.log(todo);
    {navigate('/liste')}
  }

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add To-Do  </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label forhtml="name"> Name: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Name" />
    </div>
  
    <div className="form-group">
        <label forhtml="Description"> Description: </label>
        <textarea  onChange={handleChange} className="form-control" id="Description"  ></textarea>
    </div>

    <button type="button" onClick={handleSubmit} className="btn btn-primary m-3" >Ajout</button>
</form>


</div>
  )
}

export default Ajout
