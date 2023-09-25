import React, { useState } from 'react';
import FileBase from 'react-filebase64';
import AdminNavber from './AdminNavber';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminSeries = () => {

  const [name , setName ] = useState("")
  const [title , setTitle ] = useState("")
  const [rating , setRating ] = useState("")
  const [detelis , setDetelis ] = useState("")
  const [img , setImg ] = useState("")
const navigate = useNavigate()

const handleSubmite = async() =>{
  try {
    await axios.post(`http://localhost:3000/api/v1/createseries`,{
      name:name,
      title:title,
      rating:rating,
      img:img,
      detelis:detelis
    })
    navigate("/admin/dashboar/series-view")
    
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
          <form className='w-100 create mt-5' onSubmit={handleSubmite}>
      <div className="mb-3">
        <input type="text" 
        placeholder='Name'
        name='name'
        required
         value={name}
        onChange={(e) =>setName(e.target.value)}
        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <input type="text" 
          placeholder='Title'
        name='title'
        value={title}
        required
      onChange={(e) => setTitle(e.target.value)}  
          className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <input type="text" 
          placeholder='Detelis'
        name='detelis'
        value={detelis}
        required
        onChange={(e) => setDetelis(e.target.value)}
          className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <input type="text" 
        value={rating}
        name='rating'
        required
        onChange={(e) =>setRating(e.target.value)}
        placeholder='rating'
        className="form-control" id="exampleInputPassword1" />
      </div>
    <FileBase     required type="file" multiple={false} onDone={({base64}) => setImg(base64)}/>
      
      <button type="submit" className="btn btn-primary mt-5">Submit</button>
    </form>
          </div>
        </div>
      </div>
    );
};

export default AdminSeries;