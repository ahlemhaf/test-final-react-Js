import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Liste() {
  const [listForm,setListForm]=useState([])
  const fetchdata=async ()=>{
    const li =await axios.get('http://localhost:3000/todo')
    setListForm(li.data)
  }

  const handleDelete=async(listId) =>{
    console.log(listId);
    await axios.delete(`http://localhost:3000/todo/${listId}`)
    fetchdata()
  }
  useEffect (()=>{
    fetchdata()
  },[])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center ' > To-Do List</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/ajout">Create To-Do</Link>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {listForm.map((todoo) => {
            return (
              <tr key={todoo.id}>
                <td>{todoo.id}</td>
                <td>{todoo.Name}</td>
                <td>{todoo.Description}</td>

                <td>  <Link className="btn btn-success m-2" type="button" to= {`/modif/${todoo.id}`}>Update</Link>
                  <button className="btn btn-danger m-2" onClick={()=>handleDelete(todoo.id)}>Delete</button></td>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Liste
