import axios from 'axios';
import React, {  useState } from 'react';
import './Admin.css'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const navigate = useNavigate()
    const Admin = async(e)=>{
 
      
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/api/v1/auth/signIn',{
                email,
                password
            })
            navigate('/admin/dashboar/view-movies')

        } catch (error) {
            console.log(error)
           
        }
    }
  
    return (
  <form onSubmit={Admin}>
 <div className="w-25 login">
 <div className="mb-3">
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter Your Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    
    <input type="password" 
    className="form-control" 
    placeholder='Password'
    value={password}
    onChange={(e) =>setPassword(e.target.value)}
    id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
 </div>
</form>

    );
};

export default AdminLogin;