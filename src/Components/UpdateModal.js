import { Button, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

const UpdateModal = (props) => {

    const [spinner, setSpinner] = useState(false);

    const [regFormValues, setRegFormValues] = useState({
        name: props.userData.name,
        age: props.userData.age,
        adhaar: props.userData.adhaar,
        phone: props.userData.phone,
        address: props.userData.address,
    });


    // setRegFormValues(props.userData);

    const clear = () => {
        setRegFormValues({
            ...regFormValues,
            name: '',
            age: '',
            adhaar: '',
            phone: '',
            address: ''
        });
    }

    const [regFormErr, setRegFormErr] = useState({
        name: false,
        pwd: false,
        age: false,
        adhaar: false,
        phone: false,
        address: false
    })
    const classes = {
        valid: "border-0   mb-2  mt-2 rounded form-control input-valid clr",
        inValid: "border-0   mb-2  mt-2 rounded form-control input-invalid clr"
    }
    const updateData = () => {

        if (!regFormValues.name) {
            setRegFormErr({ ...regFormErr, name: true })
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

        setSpinner(true);
        let url= 'http://localhost:5000/api/user/update/'+props.userData._id;
        axios.put(url, regFormValues)
            .then((response) => {
                setSpinner(false)
                props.getAllData()
                props.setUpdateModalVisible(false)
            })
            .catch((error) => {
                setSpinner(false)
                console.log(error);
                props.setUpdateModalVisible(false)
            })
    };

    return (
        <>
            <Modal show={true}
                backdrop="static"
                keyboard={false}
                scrollable={true}
                onHide={() => props.setUpdateModalVisible(false)} >
                <Modal.Header closeButton>
                    <Modal.Title> Edit</Modal.Title>
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
                    <Button className='btn-light cls-btn' onClick={() => props.setUpdateModalVisible(false)}>Close</Button>
                    <Button className='register-btn ms-3 border-0' onClick={() => updateData()}>Update
                        {spinner && <Spinner animation="border" size="sm" variant="light" />}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;