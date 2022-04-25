import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function NavBar() {
    const navigate = useNavigate();

    const logout=()=>{
        navigate('/');
        localStorage.clear();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div class="container-fluid d-flex justify-content-between">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button class="btn-link w-auto border-0 p-2 rounded-3 text-decoration-none" onClick={logout} >Logout</button>
                </div>

            </div>
        </nav>
    )
}
export default NavBar;