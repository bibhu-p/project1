import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Spinner } from 'react-bootstrap';

const AllModal = (props) => {

  const [spinner, setSpinner] = useState(false);
  const userDetails = props.userData[props.editIndex];


  const [regFormValues, setRegFormValues] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    adhaar: '',
    phone: '',
    address: ''
  });

  const [regFormErr, setRegFormErr] = useState({
    name: false,
    email: false,
    pwd: false,
    age: false,
    adhaar: false,
    phone: false,
    address: false
  })

  useEffect(() => {
    if (props.action === "edit") {
      setRegFormValues(userDetails);
      console.log('edit mode, data---->>>', userDetails)
    }
  },[props.action])


  const classes = {
    valid: "border-0   mb-2  mt-2 rounded form-control input-valid clr",
    inValid: "border-0   mb-2  mt-2 rounded form-control input-invalid clr"
  }

  const clear = () => {
    setRegFormValues({
      ...regFormValues,
      name: '',
      email: '',
      password: '',
      age: '',
      adhaar: '',
      phone: '',
      address: ''
    });
  }

  const formSubmit = () => {

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regFormValues.name) {
      setRegFormErr({ ...regFormErr, name: true })
      return;
    }
    if (!regFormValues.email) {
      setRegFormErr({ ...regFormErr, email: true })
      return;
    } else if (!regex.test(regFormValues.email)) {
      setRegFormErr({ ...regFormErr, email: true })
      return;
    }
    if (!regFormValues.password) {
      setRegFormErr({ ...regFormErr, pwd: true })
      return;
    }
    if (!regFormValues.age) {
      setRegFormErr({ ...regFormErr, age: true })
      return;
    }
    if (!regFormValues.adhaar) {
      setRegFormErr({ ...regFormErr, adhaar: true })
      return;
    }
    if (!regFormValues.phone) {
      setRegFormErr({ ...regFormErr, phone: true })
      return;
    } if (!regFormValues.address) {
      setRegFormErr({ ...regFormErr, address: true })
      return;
    }

    if(props.action=== 'edit'){
      regFormValues.movie = regFormValues.movie[0]._id 
    }

    setSpinner(true);
    switch(props.action){
      case 'add':{
        let url= 'http://localhost:5000/api/user/register';
        axios.post(url, regFormValues)
        .then((res)=>{
          console.log(res.data);
          setSpinner(false)
          clear()
          props.setAllModalVisible()
          props.getData()
        }).catch(err=>{
          console.log('user create error--->>>', err)
        })
      }
      case 'edit':{
        let url= 'http://localhost:5000/api/user/update/'+userDetails._id;
        axios.put(url, regFormValues)
        .then((res)=>{
          console.log(res.data);
          setSpinner(false)
          clear()
          props.setAllModalVisible()
          props.getData()

        }).catch(err=>{
          console.log('user create error--->>>', err)
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
      onHide={() => props.setAllModalVisible(false)} >
      <Modal.Header closeButton>
        <Modal.Title> {props.action === 'add' ? 'Add User' : 'Edit User Data'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row row-cols-1 row-cols-sm-2'>
          <div className='col px-2 '>
            <div className="text-black ">Name</div>
            <div className='d-flex  align-items-center'>
              <input
                type={'text'}
                id="name"
                name="name"
                autoComplete=''
                value={regFormValues.name}
                onChange={(e) => { setRegFormErr({ ...regFormErr, name: false }); setRegFormValues({ ...regFormValues, name: e.target.value }) }}
                className={regFormErr.name ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Email</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                id="email"
                name="email"
                autoComplete=''
                disabled= {props.action === 'edit' ? true: false}
                value={regFormValues.email}
                onChange={(e) => { setRegFormErr({ ...regFormErr, email: false }); setRegFormValues({ ...regFormValues, email: e.target.value }) }}
                className={regFormErr.email ? classes.inValid : classes.valid} />
            </div>
          </div>
          {props.action === 'add' && <div className='col px-2'>
            <div className="text-black ">Password</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'password'}
                id="password"
                name="password"
                autoComplete=''
                value={regFormValues.password}
                onChange={(e) => { setRegFormErr({ ...regFormErr, pwd: false }); setRegFormValues({ ...regFormValues, password: e.target.value }) }}
                className={regFormErr.pwd ? classes.inValid : classes.valid} />
              
            </div>
          </div>}
          <div className='col px-2'>
            <div className="text-black ">Age</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                id="age"
                name="age"
                autoComplete=''
                value={regFormValues.age}
                onChange={(e) => { setRegFormErr({ ...regFormErr, age: false }); setRegFormValues({ ...regFormValues, age: e.target.value }) }}
                className={regFormErr.age ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Phone</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                id="phone"
                name="phone"
                autoComplete=''
                value={regFormValues.phone}
                onChange={(e) => { setRegFormErr({ ...regFormErr, phone: false }); setRegFormValues({ ...regFormValues, phone: e.target.value }) }}
                className={regFormErr.phone ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Adhaar</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                id="adhaar"
                name="adhaar"
                autoComplete=''
                value={regFormValues.adhaar}
                onChange={(e) => { setRegFormErr({ ...regFormErr, adhaar: false }); setRegFormValues({ ...regFormValues, adhaar: e.target.value }) }}
                className={regFormErr.adhaar ? classes.inValid : classes.valid} />
            </div>
          </div>
          <div className='col px-2'>
            <div className="text-black ">Address</div>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                type={'text'}
                id="address"
                name="address"
                autoComplete=''
                value={regFormValues.address}
                onChange={(e) => { setRegFormErr({ ...regFormErr, address: false }); setRegFormValues({ ...regFormValues, address: e.target.value }) }}
                className={regFormErr.address ? classes.inValid : classes.valid} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-light cls-btn' onClick={() => props.setAllModalVisible(false)}>Close</Button>
        <Button className='register-btn ms-3 border-0' onClick={() => formSubmit()}>{props.action === 'add' ? 'Add' : 'Update'}
          {spinner && <Spinner animation="border" size="sm" variant="light" />}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default AllModal