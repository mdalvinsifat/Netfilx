import React, { useEffect, useState } from 'react';
import './Admin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavber from './AdminNavber';

const ViewAdminDetelis = () => {
    const [product , setProduct] = useState([])
    const Product = async()=>{
        const data = await fetch('http://localhost:3000/api/v1/get')
        const res = await data.json()
        setProduct(res.Mydata)
    }

const DeleteProduct = async(id) =>{
  try {
    const res = await axios.delete(`http://localhost:3000/api/v1/delete/${id}`)
    Product()
  } catch (error) {
    console.log(error)
  }

}

useEffect(()=>{
Product()
},[])
    return (
        <div>

<div className="container">
  <div className="row">
    <div className="col-md-3">
<AdminNavber></AdminNavber>
    </div>

    <div className="col-md-8">
    <table class="table text-light w-100 product-margin">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">title</th>
      <th scope="col">image</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {
    product.map((pd) =>{
        return(
            <tr> 
                <td>{pd.name}</td>
                <td>{pd.title}</td>
                <td><img src={pd.img} alt="" srcset="" className='img-fluid image-reading w-25' /></td>
                <td>
                    <button className='btn btn-primary'>
                    <Link to={`/admin/edit/${pd._id}`} className='text-light text-decoration-none '>
                      Edit
                    </Link>
                      </button>
                    <button className='btn btn-danger ms-3' onClick={() => DeleteProduct(pd._id)}>Delete</button>
                </td>
            </tr>
        )
    })
   }
 
   
  </tbody>
</table>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default ViewAdminDetelis;