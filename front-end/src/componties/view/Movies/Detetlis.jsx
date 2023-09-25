import React, { useEffect, useState } from 'react';
import LayOut from '../LayOut';
import { useParams } from 'react-router-dom';

const Detetlis = () => {

    const {id} = useParams()
    const [products , setProduct] = useState("")
    
    useEffect(()=>{
        DetelisProduct()
    },[])

    const DetelisProduct = async()=>{
        const respose = await fetch(`http://localhost:3000/api/v1/readmovie/${id}`)
        const res = await respose.json()
        setProduct(res.data)
    }
    const {name , rating, img, detelis, title} = products
    return (
        <LayOut>
             <div className='container'>
                           <div className="row">
                            <div className="col-md-5">
                                <img src={img} alt="" srcset="" className='w-75 img-fluid' />
                            </div>

                            <div className="col-md-6 mt-5">
                                <h1 className='mt-5 text-danger'>{name}</h1>
                                <h3 className='mt-2 text-danger'>Creating By :{title}</h3>
                                <h6 className='mt-5 text-light'>{rating}</h6>
                                <p className='mt-3'>{detelis}</p>
                            </div>
                           </div>
                        </div>
        </LayOut>
    );
};

export default Detetlis;