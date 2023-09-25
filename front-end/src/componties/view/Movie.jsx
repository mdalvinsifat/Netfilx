import React, { useEffect, useState } from 'react';
import Carsoule from './Carsoule';
import CardBanner from './CardBanner';
import LayOut from './LayOut';
import { Link } from 'react-router-dom';

const Movie = () => {
    const [product , setProduct ] = useState([])
 const Get = async() =>{
    const data = await fetch("http://localhost:3000/api/v1/get")
    const res = await data.json()
    console.log(res)
    setProduct(res.Mydata)
 }

 useEffect(()=>{
    Get()
 },[])
    return (
        <LayOut>
    
          
            <Carsoule></Carsoule>
            <CardBanner></CardBanner>
          
 <div className="container mt-5">

      
                <div className='d-flex flex-wrap'>
    {
        product.map(item =>{
            return(
               <div className='ms-5 mt-5'>
                <Link to={`/movie/${item._id}`}>

                 <img src={item.img} alt="" srcset="" className='img-fluid ms-3' />
                </Link>
        
                
                <p>{item.name}</p>
                       </div>
            )
        })
    }
            </div>
    
    </div>
 
        </LayOut>
    );
};

export default Movie;