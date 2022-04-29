import { Modal, Button, Spinner } from 'react-bootstrap';
import axios from "axios";

import { useState, useEffect } from "react";

const SelectMovieModal = (props) => {

    const token = JSON.parse(localStorage.getItem('authToken'));

    const [spinner, setSpinner] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState('');

    const getMovieData = () => {
        axios.get('http://localhost:5000/api/movie/find', { headers: { 'auth-token': token } })
            .then((response) => {
                setMovieList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getMovieData()
    }, [])

    const movieId = selectedMovieId;
    const movieData = movieList.filter(data => data._id === movieId);
    
    const formSubmit = () => {
        setSpinner(true)
        let body = {
            movie:movieId
        }
        let url = 'http://localhost:5000/api/user/update/'+props.userData._id;
        axios.put(url,body)
        .then((response)=>{
            setSpinner(false)
            props.getAllData()
            props.setModal(false)
        })
        .catch((error)=>{
            setSpinner(false)
           console.log(error);
           props.setModal(false)
        })
    }
    return (
        <Modal show={true}
            backdrop="static"
            keyboard={false}
            scrollable={true}
            onHide={() => props.setModal(false)} >
            <Modal.Header closeButton>
                <Modal.Title> Add Movies </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <select id='m-select' class="form-select" onChange={(e)=>{setSelectedMovieId(e.target.value)}}>
                    <option selected>Choose a movie</option>
                    {movieList.map((data)=>
                        <>
                        <option  value={data._id} >{data.name}</option>
                        </>
                    )}
                </select>
                {selectedMovieId.length > 0 &&
                <div className="card card-body mt-2 p-1">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                        <div className="col">
                            <p className="ms-1 p-1"><span className="fw-bold">Name: </span> {movieData[0].name} </p>
                        </div>
                        <div className="col">
                            <p className="ms-1 p-1"><span className="fw-bold">Director: </span> {movieData[0].director}  </p>
                        </div>
                        <div className="col">
                            <p className="ms-1 p-1"><span className="fw-bold">Producer: </span> {movieData[0].producer} </p>
                        </div>
                        <div className="col">
                            <p className="ms-1 p-1"><span className="fw-bold">Hero: </span> {movieData[0].hero}</p>
                        </div>
                        <div className="col">
                            <p className="ms-1 p-1"><span className="fw-bold">Heroine:</span> {movieData[0].heroine}</p>
                        </div>
                    </div>
                </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-light cls-btn' onClick={() => props.setModal(false)}>Close</Button>
                <Button className='register-btn border-0' onClick={() => formSubmit()}>Add
                    {spinner && <Spinner animation="border" size="sm" variant="light" />}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SelectMovieModal;