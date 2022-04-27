import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
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
            <nav class="navbar navbar-expand-lg navbar-light bg-info text-white">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar;