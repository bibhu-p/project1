import { useState, useEffect } from "react";
import axios from "axios";
import SelectMovieModal from "../Components/SelectMovieModal";
import UpdateModal from "../Components/UpdateModal";

const UserDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    const token = JSON.parse(localStorage.getItem('authToken'));

    const [movieList, setMovieList] = useState([]);
    const [movieListData, setMovieListData] = useState([]);
    const [modal, setModal] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [option, setOption] = useState(null)

    const getAllData = () => {
        let url = 'http://localhost:5000/api/user/find/' + data._id;
        axios.get(url)
            .then((response) => {
                setUserInfo(response.data);
                setMovieList(response.data.movie);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getAllData()
    }, [])


    const getMovieData = async () => {
       await axios.get('http://localhost:5000/api/movie/find', { headers: { 'auth-token': token } })
            .then((response) => {
                setMovieListData(response.data);
                let options = [{value:null, label:"Choose Movie"}]

                response.data.map(val => {
                    options =[...options, { value: val._id, label: val.name }]
                })
                return options;
            })
            .then((res)=>{
                setOption(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const onAdd = () => {
        getMovieData()
        setModal(true)

    }
    const onUpdate = () => {
        setUpdateModalVisible(true)
    }

    return (
        <>
            <div className="container m-3 p-2 ">
                {/* User Details */}
                <div className="row pb-2">
                    <div className="col">
                        <div className="card nav-div w-75 ">
                            <div className="card-body">
                                <h5 className="card-title">Details</h5>
                                <p className="card-text">Name : {userInfo.name}</p>
                                <p className="card-text">Email : {userInfo.email}</p>
                                <button className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                                    Full Details
                                </button>
                                <button className="btn btn-secondary float-end " onClick={onUpdate}>
                                    Edit
                                </button>
                                <div className="collapse" id="collapseExample" >
                                    <div className="card card-body mt-2 p-1">
                                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                                            <div className="col">
                                                <p className="ms-1 p-1">Name: {userInfo.name}</p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1">Email: {userInfo.email}</p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1">Age: {userInfo.age}</p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1">Adhaar: {userInfo.adhaar} </p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1">Phone: {userInfo.phone} </p>
                                            </div>
                                            <div className="col">
                                                <p className="ms-1 p-1">Address: {userInfo.address} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Movie details */}
                <div className="row mt-3">
                    <div className="col">
                        <div className="card nav-div w-75">
                            <div className="card-body" style={{ maxHeight: '315px', overflow: 'auto' }}>
                                <h5 className="card-title">Favorite Movies</h5>
                                <p className="card-text"> No of Movies : {movieList.length}</p>
                                <button className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseMovie">
                                    Movie Details
                                </button>
                                <button className="btn btn-secondary float-end " onClick={() => onAdd()}>
                                    Add Movies
                                </button>
                                <div className="collapse" id="collapseMovie" >
                                    {movieList.map((data, i) =>
                                        <div key={i} className="card card-body mt-2 p-1">
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
            {/* Modals */}
            {
                modal && <SelectMovieModal
                    setModal={setModal}
                    userData={userInfo}
                    getAllData={getAllData}
                    options={option}
                    movieListData={movieListData}
                />
            }
            {
                updateModalVisible &&
                <UpdateModal
                    setUpdateModalVisible={setUpdateModalVisible}
                    userData={userInfo}
                    getAllData={getAllData}

                />
            }
        </>
    )
}
export default UserDashBoard;