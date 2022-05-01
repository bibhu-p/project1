import { Modal, Button, Spinner } from 'react-bootstrap';
import axios from "axios";
import Select from 'react-select';
import { useState } from "react";
const SelectMovieModal = (props) => {

    // const token = JSON.parse(localStorage.getItem('authToken'));

    const [spinner, setSpinner] = useState(false);
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);

    const formSubmit = () => {
        // let movieIds = [];
        movieDetails.forEach(val => {
            setSpinner(true)
            // movieIds.push(val._id);
            let body = {
                movie: val._id
            }
            let url = 'http://localhost:5000/api/user/update/' + props.userData._id;
            axios.put(url, body)
                .then((response) => {
                    setSpinner(false)
                    props.getAllData()
                    props.setModal(false)
                })
                .catch((error) => {
                    setSpinner(false)
                    console.log(error);
                    props.setModal(false)
                })
        })

        // let body = {
        //     movie: movieIds
        // }
        // console.log(body)


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
            <Modal.Body style={{ minHeight: "60%" }}>
                <Select
                    value={movies}
                    onChange={(e) => {
                        setMovies(e)
                        if (e[e.length - 1].value) {
                            console.log(typeof (e[e.length - 1].value));
                            let singleMovie = props.movieListData.filter((val) => val._id === e[e.length - 1].value);
                            movieDetails.push(singleMovie[0])
                            // console.log(movieDetails)
                            setMovieDetails(movieDetails)
                        }
                    }}
                    options={props.options ? props.options : []}
                    isMulti={true}
                />

                {movieDetails && movieDetails.map((val, i) => {
                    return <div className="card card-body mt-2 p-1" key={i}>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                            <div className="col">
                                <p className="ms-1 p-1"><span className="fw-bold">Name: </span> {val.name} </p>
                            </div>
                            <div className="col">
                                <p className="ms-1 p-1"><span className="fw-bold">Director: </span> {val.director}  </p>
                            </div>
                            <div className="col">
                                <p className="ms-1 p-1"><span className="fw-bold">Producer: </span> {val.producer} </p>
                            </div>
                            <div className="col">
                                <p className="ms-1 p-1"><span className="fw-bold">Hero: </span> {val.hero}</p>
                            </div>
                            <div className="col">
                                <p className="ms-1 p-1"><span className="fw-bold">Heroine:</span> {val.heroine}</p>
                            </div>
                        </div>
                    </div>
                })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-light cls-btn' onClick={() => props.setModal(false)}>Close</Button>
                <Button className='register-btn border-0' onClick={() => formSubmit()}>
                {spinner ? <Spinner animation="border" size="sm" variant="light" />:<span className='text-white ms-2 '>Add</span>}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SelectMovieModal;