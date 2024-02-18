import React from "react"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

    const favMovies= useSelector((state)=>state.favouriteMov.favourites)
const favDispatch=useDispatch()

//////////////////////////////////////////////////////////
    return <>
  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 col-12">
    <div className="col-10">
    <ul className="navbar-nav ">
                    <li className="nav-item active ">
                        <Link to={'/'} className="nav-link"  >Movies </Link>
                    </li>
                    <li className="nav-item active ">
                        <Link to={'/favourite'} className="nav-link"  >Favourites </Link>
                    </li>
                   
                    <FaHeart  className='text-danger m-2 ms-2  fs-4'/> <span className=" fs-4 text-danger"> {favMovies.length}</span>
                   
                </ul>
            </div>
            <div className="collapse navbar-collapse col-2   " id="navbarNav">
                <ul className="navbar-nav float-end ">
                    <li className="nav-item active ">
                        <Link to={'/login'} className="nav-link"  >Login </Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
       
    </>
}

export default Header