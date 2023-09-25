import React, { useState } from 'react';
import './Sign.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth';


const Sign = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {navigate("/notcurret")}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User:{navigate('/movies')}</p>
      </div>
    );
  }
    return (
        <div className=' bg-image'>
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ms-5">
    <a className="navbar-brand ms-5 text-danger fs-1" href="#">
        <h1 className='netfilx'> NETFLX</h1>
    </a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
        </li>
      </ul>
    
    </div>
  </div>
</nav>

<div className=" py-5 px-3  text-left bg-color-dark">
    <h2 className='ms-5'> Sign In </h2>
    <br />
    <div className="text-center">

    <div className="input w-75 rounded">
    <input classname="form-control me-2 rounded"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    type="email" placeholder="Email or Phone Number" aria-label="Search" />

    <br />

    <input type="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    placeholder='Password' className='mt-2 rounded'/>
  <a href="#">
    <button className='signIn mt-5 text-light fs-5' onClick={() => signInWithEmailAndPassword(email, password)}>Sign In</button>
  </a>

  
    </div>
    <div className="container">
<div className="row">
    <div className="col-md-5 ms-5 mt-5">
        
    <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label me-4" htmlFor="exampleCheck1">Remember Me</label>
</div>


    </div>

    <div className="col-md-5 mt-5">
        <p> Need help?</p>
    </div>
</div>

    </div>


<div className="heading-signUp row d-flex">
 <div className="col-md-7 ms-4 mt-5">

<h6 className='mt-4'>
    <span className='new-to-netfilx'> New To Netfilx </span>
  <NavLink to="/signUp" className='text-light '>
  Sign Up Now
  </NavLink>
    </h6>  
    
 </div>
</div>





    </div>

    

   
</div>

        </div>
    );
};

export default Sign;