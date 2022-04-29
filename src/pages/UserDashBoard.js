import { useState , useEffect} from "react";
import axios from "axios";
import SelectMovieModal from "../Components/SelectMovieModal";

const UserDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    const [movieList, setMovieList] = useState([]);
    const [modal, setModal] = useState(false)
   
    const getAllData =()=>{
        let url = 'http://localhost:5000/api/user/find/'+data._id;
        axios.get(url)
        .then((response)=>{
           setMovieList(response.data.movie);
        })
        .catch((error)=>{
           console.log(error);
        })
      }
      useEffect(()=>{
        getAllData()
      },[])

    const onAdd = () => {
       setModal(true)
    }

    return (
        <>
            <div className="container m-5 ">
            {/* User Details */}
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
            {/* Movie details */}
                <div className="row mt-5">
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
                                {movieList.map((data) =>
                                    <div className="card card-body mt-2 p-1">
                                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                                            <div className="col">
                                                <p className="ms-1 p-1"><span className="fw-bold">Name:</span> {data.name} </p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1"><span className="fw-bold">Director: </span>{data.director}</p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1"><span className="fw-bold">Producer: </span>{data.producer}</p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1"><span className="fw-bold">Hero: </span>{data.hero} </p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1"><span className="fw-bold">Heroine:</span>{data.heroine} </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {modal && <SelectMovieModal
            setModal = {setModal}
            userData = {data}
            getAllData = {getAllData}
            />
            }
        </>
    )
}
export default UserDashBoard;