import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-filebase64';
import { useNavigate, useParams } from 'react-router-dom';

const SeriesEdit = () => {
    const {id} = useParams()
    const [name , setName]   = useState("")
    const [title , setTitle]   = useState("")
    const [img , setImg]   = useState("")
    const [detelis , setDetelis]   = useState("")
    const [rating , setRating]   = useState("")
    const navigate = useNavigate()

useEffect(() =>{
const ReadProduct = async() =>{
    try {
        await axios.get(`http://localhost:3000/api/v1/readseries/${id}`)

    } catch (error) {
        console.log(error)
    }
}
},[])


const UpdateProduct = async(e)=>{
    e.preventDefault()
    try {
        await axios.put(`http://localhost:3000/api/v1/updateSeries/${id}`,
        name,
        title,
        rating,
        img,
        detelis
        )
        navigate("/admin/dashboar/series-view")
        
    } catch (error) {
        console.log(error)
    }
}
    return (
        <div>
        <form className='w-25 create mt-5' onSubmit={UpdateProduct}>
  <div className="mb-3">
    <input type="text" 
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder='Name'
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <input type="text" 
      placeholder='Title'
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      
      className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <input type="text" 
      placeholder='Detelis'
      name="detelis"
      value={detelis}
      onChange={(e) => setDetelis(e.target.value)}
      className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <input type="text" 
    name="rating"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    placeholder='rating'
    className="form-control" id="exampleInputPassword1" />
  </div>
<FileBase type="file" multiple={false}  onDone={({base64}) => setImg(base64)}/>
  
  <button type="submit" className="btn btn-primary mt-5">Submit</button>
</form>
    </div>
    );
};

export default SeriesEdit;