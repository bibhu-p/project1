import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { FaUserCircle, FaRegUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function NavBar() {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        localStorage.clear();
    }
    return (
        <>
            <nav className="navbar nav-div navbar-expand-lg navbar-light  bg-white w-100">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex">
                        <div className="dropdown nav-drop ms-auto">
                            <button className="dropdown-toggle bg-white border-0 mt-2 ms-3 " data-bs-toggle="dropdown">
                                <FaUserCircle size={35} />
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item lg-btn" onClick={logout}>Logout <RiLogoutCircleLine /> </button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
export default NavBar;