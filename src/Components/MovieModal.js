import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Spinner } from 'react-bootstrap';

const MovieModal = (props) => {

  const [spinner, setSpinner] = useState(false);
  const movieDetails = props.movieData[props.editIndex];
  const token = JSON.parse(localStorage.getItem('authToken'));


  const [regFormValues, setRegFormValues] = useState({
    name: '',
    producer: '',
    director: '',
    hero: '',
    heroine: '',
  });

  const [regFormErr, setRegFormErr] = useState({
    name: false,
    producer: false,
    director: false,
    hero: false,
    heroine: false,
  })

  useEffect(() => {
    if (props.action === "edit") {
      setRegFormValues(movieDetails);
      console.log('edit mode, data---->>>', movieDetails)
    }
  },[props.action])


  const classes = {
    valid: "border-0   mb-2  mt-2 rounded form-control input-valid clr",
    inValid: "border-0   mb-2  mt-2 rounded form-control input-invalid clr"
  }
  const headers = {
      headers:{
        'auth-token': token
      }
  }

  const clear = () => {
    setRegFormValues({
      ...regFormValues,
      name: '',
      producer: '',
      director: '',
      hero: '',
      heroine: '',
    });
  }

  const formSubmit = () => {

    if (!regFormValues.name) {
      setRegFormErr({ ...regFormErr, name: true })
      return;
    }
    if (!regFormValues.producer) {
      setRegFormErr({ ...regFormErr, producer: true })
      return;
    }
    if (!regFormValues.director) {
      setRegFormErr({ ...regFormErr, director: true })
      return;
    }
    if (!regFormValues.hero) {
      setRegFormErr({ ...regFormErr, hero: true })
      return;
    }
    if (!regFormValues.heroine) {
      setRegFormErr({ ...regFormErr, heroine: true })
      return;
    }

    setSpinner(true);
    switch(props.action){
      case 'add':{
        let url= 'http://localhost:5000/api/movie/create';
        axios.post(url,regFormValues, headers)
        .then((res)=>{
          console.log(res.data);
          setSpinner(false)
          clear()
          props.setMovieModalVisible()
          props.getMovieData()
        }).catch(err=>{
          console.log('movie create error--->>>', err)
        })
      }
      case 'edit':{
        let url= 'http://localhost:5000/api/movie/update/'+movieDetails._id;
        axios.put(url ,regFormValues,headers)
        .then((res)=>{
          console.log(res.data);
          setSpinner(false)
          clear()
          props.setMovieModalVisible()
          props.getMovieData()

        }).catch(err=>{
          console.log('Movie edit error--->>>', err)
        })
      }
      default:{
        break;
      }
    }
  };

  return (
    <Modal show={true}
      backdrop="static"
      keyboard={false}
      scrollable={true}
      onHide={() => props.setMovieModalVisible(false)} >
      <Modal.Header closeButton>
        <Modal.Title> {props.action === 'add' ? 'Add Movie' : 'Edit Movie Data'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row row-cols-1 row-cols-sm-2'>
          <div className='col px-2 '>
            <div className="text-black ">Name</div>
            <div className='d-flex  align-items-center'>
              <input
                type={'text'}
                name="name"
                autoComplete=''
                value={regFormValues.name}
                onChange={(e) => { setRegFormErr({ ...regFormErr, name: false }); setRegFormValues({ ...regFormValues, name: e.target.value }) }}
                className={regFormErr.name ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Producer</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                name="producer"
                autoComplete=''
                value={regFormValues.producer}
                onChange={(e) => { setRegFormErr({ ...regFormErr, producer: false }); setRegFormValues({ ...regFormValues, producer: e.target.value }) }}
                className={regFormErr.producer ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Director</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                name="director"
                autoComplete=''
                value={regFormValues.director}
                onChange={(e) => { setRegFormErr({ ...regFormErr, director: false }); setRegFormValues({ ...regFormValues, director: e.target.value }) }}
                className={regFormErr.director ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Hero</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                name="hero"
                autoComplete=''
                value={regFormValues.hero}
                onChange={(e) => { setRegFormErr({ ...regFormErr, hero: false }); setRegFormValues({ ...regFormValues, hero: e.target.value }) }}
                className={regFormErr.hero ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Heroine</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                name="heroine"
                autoComplete=''
                value={regFormValues.heroine}
                onChange={(e) => { setRegFormErr({ ...regFormErr, heroine: false }); setRegFormValues({ ...regFormValues, heroine: e.target.value }) }}
                className={regFormErr.heroine ? classes.inValid : classes.valid} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-light cls-btn' onClick={() => props.setMovieModalVisible(false)}>Close</Button>
        <Button  className='register-btn border-0' onClick={() => formSubmit()}>{props.action === 'add' ? 'Add' : 'Update'}
          {spinner && <Spinner animation="border" size="sm" variant="light" />}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default MovieModal