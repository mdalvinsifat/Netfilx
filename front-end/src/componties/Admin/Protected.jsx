import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Compoties} = props
const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem("admin")
        if(!login){
navigate('/admin')
        }

    },[])
    return (
        <div>
            <Compoties></Compoties>
        </div>
    );
};

export default Protected;