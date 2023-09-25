import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-image text-center'>
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
            <NavLink to='/sign' className='nav-link'>
          <a className="nav-link active me-5 text-light bg-danger px-3 netilx-sign" aria-current="page" href="#">
            Sign In
          </a>
            </NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>




<div className="mt-5">
    <div className="mt-5 pt-5">
        <div className="mt-5 Heading-top">
            <h1 className='text-light mt-5 pt-5 pt-5  Heading'>
Unlimited movies, TV shows, and more</h1>
        </div>
        <h3 className='text-light mt-3'>
        Watch anywhere. Cancel anytime.
        </h3>
        <h5 className='text-light mt-3'>
        Ready to watch? Enter your email to create or restart your membership.
        </h5>
    </div>
</div>

<div className="m-center mt-5 w-25 email-home">
<input className="form-control me-2 search-bar-design w-100" type="Email" placeholder="Enter Your Email" aria-label="Search" />
    </div>

        </div>
    );
};

export default Header;