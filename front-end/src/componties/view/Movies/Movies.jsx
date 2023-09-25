import React, { useEffect, useState } from 'react';
import LayOut from '../LayOut';
import { Link } from 'react-router-dom';

const Movies = () => {
const [movie , setMovie] = useState([])

const Product = async()=>{
    try {
        const data = await fetch("http://localhost:3000/api/v1/getmovie")
        const res = await data.json()
        setMovie(res.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
Product()
},[])
    return (
       <LayOut>
<div className="d-flex flex-wrap">
           
{
        movie.map(pd =>{
            return(
                <div className='ms-3'>
                     <Link to={`/movies/detelis/${pd._id}`}>

                    <img src={pd.img} alt='' />
                     </Link>
              
                    <p>{pd.name}</p>
                </div>
               
            )
        })
    }
</div>
       </LayOut>
    );
};

export default Movies;