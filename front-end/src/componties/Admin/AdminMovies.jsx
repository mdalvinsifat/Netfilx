import React, { useState } from 'react';
import FileBase from 'react-filebase64';
import AdminNavber from './AdminNavber';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminMovies = () => {
  const navigate = useNavigate()
  const [name , setName]   = useState("")
  const [title , setTitle]   = useState("")
  const [img , setImg]   = useState("")
  const [detelis , setDetelis]   = useState("")
  const [rating , setRating]   = useState("")

  const Product = async(e) =>{
    
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3000/api/v1/createmovie`,{
        name:name,
        title:title,
        img:img,
        detelis:detelis,
        rating:rating
      })
      navigate('/movies')
      
    } catch (error) {
      console.log(error)
    }
  }

    return (
        <div className="container">
        <div className="row">
          <div className="col-md-3">
   <AdminNavber/>
          </div>
          <div className="col-md-8">
          <form className='w-100 create mt-5' onSubmit={Product}>
      <div className="mb-3">
        <input type="text" 
     name='name'
     value={name}
     onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <input type="text" 
          placeholder='Title'
          required
          name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
       
          className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <input type="text" 
          placeholder='Detelis'
          name='detelis'
          required
        value={detelis}
        onChange={(e) => setDetelis(e.target.value)}
          className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <input type="text" 
        name='rating'
        required
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder='rating'
        className="form-control" id="exampleInputPassword1" />
      </div>
    <FileBase 
        required
    type="file" multiple={false} onDone={({base64}) => setImg(base64)}  />
      
      <button type="submit" className="btn btn-primary mt-5">Submit</button>
    </form>
          </div>
        </div>
      </div>
    );
};

export default AdminMovies;