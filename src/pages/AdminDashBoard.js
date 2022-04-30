import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdPersonAddAlt1 } from "react-icons/md";


const AdminDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    const token = JSON.parse(localStorage.getItem('authToken'));


    const [userData, setUserData] = useState([]);
    const [movieData, setMovieData] = useState([])

    const getData = () => {
        axios.get('http://localhost:5000/api/user/find', { headers: { 'auth-token': token } })
            .then((response) => {
                return setUserData(response.data);
            })
            .catch((error) => {
                return console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])


    const getMovieData = () => {
        axios.get('http://localhost:5000/api/movie/find', { headers: { 'auth-token': token } })
            .then((response) => {
                return setMovieData(response.data);
            })
            .catch((error) => {
                return console.log(error);
            })
    }
    useEffect(() => {
        getMovieData()
    }, [])

    return (
        <>
            <div className="container m-3  p-3 ">
                <div className="row mb-3">
                    <div className="col">
                        <div className="card rounded nav-div w-75 ">
                            <div className="card-body ">
                                <h5 className="card-title">Info</h5>
                                <p className="card-text">Name : {data.name}</p>
                                <p className="card-text">Email : {data.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card rounded nav-div w-25 ">
                            <div className="card-body">
                                <h5 className="card-title">Info</h5>
                                <button className='border-0 bg-body'><MdPersonAddAlt1 size={15}/> Admin</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="card rounded nav-div w-75 ">
                            <div className="card-body">
                                <h5 className="card-title">Users Info</h5>
                                <p className="card-text">No of Users : {userData.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded nav-div w-75 ">
                            <div className="card-body">
                                <h5 className="card-title">Movies Info</h5>
                                <p className="card-text">No of Movies : {movieData.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default AdminDashBoard;