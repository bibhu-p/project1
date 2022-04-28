// import { useState } from "react";
// import axios from "axios";
// import AllModal from "../Components/AllModal";

const UserDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    // const token = JSON.parse(localStorage.getItem('authToken'));
    // const [movieList, setMovieList] = useState([]);
    const movieData = JSON.parse(localStorage.getItem('movieData'));
    console.log(movieData);
    
    const onAdd = () => {
        console.log("OnAddMovies ----->>>>>>>>>>>>>>>>>>>");
    }

    return (
        <>
        <div className="container m-5 ">
            <div className="row mb-3">
                <div className="col">
                    <div className="card nav-div w-75 ">
                        <div className="card-body">
                            <h5 className="card-title">Details</h5>
                            <p className="card-text">Name : {data.name}</p>
                            <p className="card-text">Email : {data.email}</p>
                            <button className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                                Full Details
                            </button>
                            <div className="collapse" id="collapseExample" >
                                <div className="card card-body mt-2 p-1">
                                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                                        <div className="col">
                                            <p className="ms-1 p-1">Name: {data.name}</p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Email: {data.email}</p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Age: {data.age}</p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Adhaar: {data.adhaar} </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Phone: {data.phone} </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Address: {data.address} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row mt-2">
                <div className="col">
                    <div className="card nav-div w-75">
                        <div className="card-body">
                            <h5 className="card-title">Favorite Movies</h5>
                            <p className="card-text"> No of Movies : {data.movie.length}</p>
                            <button className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseMovie">
                                Movie Details
                            </button>
                            <button className="btn btn-secondary float-end " onClick={onAdd}>
                                Add Movies
                            </button>
                            <div className="collapse" id="collapseMovie" >
                                <div className="card card-body mt-2 p-1">
                                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                                        <div className="col">
                                            <p className="ms-1 p-1">Name: </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Director: </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Producer: </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Hero:  </p>
                                        </div>
                                        <div className="col">
                                            <p className="ms-1 p-1">Heroine: </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserDashBoard;