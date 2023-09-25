import React, { useState } from 'react';
import './Sign.css'
import { NavLink } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth';
const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
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
    <input classname="form-control me-2 rounded" type="text" placeholder="Name" aria-label="Search" />

    <br />

    <input type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
    placeholder='Enter Your Email' required className='mt-2 rounded'/>
    <input type="Password" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    placeholder='Password' required className='mt-2 rounded'/>
    <input type="text" placeholder='Address'  required className='mt-2 rounded'/>
  <a href="#">
  <NavLink to="/sign">
  <button  className='signIn mt-5 text-light fs-5' onClick={() => createUserWithEmailAndPassword(email, password)}>Sign Up</button>
  </NavLink>
  </a>

  
    </div>
    

<div className="heading-signUp row d-flex">
 <div className="col-md-7 ms-4 mt-5">

<h6 className='mt-4'>
    <span className='new-to-netfilx'> New To Netfilx </span>
  <NavLink to="/sign" className='text-light '>
sign In 
  </NavLink>

    </h6>  
    
 </div>
</div>





    </div>

    

   
</div>

        </div>
    );
};

export default SignUp;