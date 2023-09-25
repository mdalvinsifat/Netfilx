import React, { useEffect, useState } from 'react';
import LayOut from '../LayOut';
import { Link } from 'react-router-dom';

const Series = () => {

    const [product ,setProduct] = useState([])
    const ProductDetelis = async()=>{
        try {
            const respose = await fetch(`http://localhost:3000/api/v1/getseries`)
            const res = await respose.json()
            setProduct(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
ProductDetelis()
    },[])
    return (
        <LayOut >
          <div className="container-fluid">
          <div className='d-flex flex-wrap '>
            
            {
                product.map(pd =>{
        
                    return(
                        <div>
                            <Link to={`/series/${pd._id}`}>

                             <img src={pd.img} alt="" srcset="" className='img-fluid ms-3' />
                            </Link>
                         
                        <p>{pd.name}</p>
                             
                        </div>
                       
                    )
                })
            }
                    </div>
          </div>
        </LayOut>
    );
};

export default Series;