import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
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
            <nav class="navbar nav-div navbar-expand-lg navbar-light  bg-white w-100">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse d-flex justify-content-between">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div class="d-flex">
                            <div className="dropdown">
                                <button className="dropdown-toggle dd-btn border-0 mt-2 ms-3 " data-bs-toggle="dropdown">
                                    <FaUserCircle size={35}/>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item lg-btn">Profile</button></li>
                                    <li><button className="dropdown-item lg-btn" onClick={logout}>Logout <RiLogoutCircleLine /> </button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
export default NavBar;