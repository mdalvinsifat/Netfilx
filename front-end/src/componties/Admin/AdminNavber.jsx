import React from 'react';
import { NavLink } from 'react-router-dom';
import Create from './Create';

const AdminNavber = () => {
    return (
        <div className='list-group mt-5 ms-5'>
           <NavLink to="/admin/dashboar/create-movies" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
          Home Movie 
           </NavLink>
       
    <br/>
    <NavLink to="/admin/dashboar/view-movies" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
     Home View 
           </NavLink>

    <br/>
    <NavLink to="/admin/dashboar/movies" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
     Movies
           </NavLink>
    <br/>
    <NavLink to="/admin/dashboar/movies-view" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
          View  Movies
           </NavLink>
    <br/>
    <NavLink to="/admin/dashboar/series-movie" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
       Series 
           </NavLink>
    <br/>
    <NavLink to="/admin/dashboar/series-view" className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
    Series View 
           </NavLink>
          
        </div>
    );
};

export default AdminNavber;