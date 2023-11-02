import React, { useState } from 'react';
import '../Home/Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [search , setSearch] = useState([])

const SearchProduct = async(key)=>{
  try {
    const response = await fetch(`http://localhost:3000/api/v1/search/${key}`)
    const res = await response.json()
    setSearch(res.result)
  } catch (error) {
    console.log(error)
  }
}

    return (
        <div>
              <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ms-5">
    <a className="navbar-brand ms-5 text-danger fs-1" href="#">
        <h1 className='netfilx'> NETFLX</h1>
    </a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
        <li className="nav-item  ">
            <NavLink to='/movie' className='nav-link'>
          <a className="nav-link active me-5 text-light  fs-5" aria-current="page" href="#">
         Home
          </a>
            </NavLink>
        </li>

        <li className="nav-item ">
            <NavLink to='/movies' className='nav-link'>
          <a className="nav-link active me-5 text-light  fs-5" aria-current="page" href="#">
      Movies 
          </a>
            </NavLink>
        </li>


        <li className="nav-item ">
            <NavLink to='/series' className='nav-link'>
          <a className="nav-link active me-5 text-light fs-5" aria-current="page" href="#">
      Series
          </a>
            </NavLink>
        </li>

      </ul>
    

    <div className="ms-auto">
<input className="form-control me-2 
search-bar-design w-100" 
type="search"

 placeholder="Search"
  aria-label="Search" />
    </div>
    </div>

  </div>
</nav>
        </div>
    );
};

export default Header;