import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function NavBar() {
    const navigate = useNavigate();

    const logout=()=>{
        navigate('/');
        localStorage.clear();
    }
    return (
        <div className=" d-flex nav justify-content-end align-items-center ">
            <button class="btn-link lg-btn w-auto h-50 me-3 border-0 rounded-2 text-decoration-none" onClick={logout}>
            Logout <RiLogoutCircleLine className='ms-1'/></button>
        </div>
    )
}
export default NavBar;