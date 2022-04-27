import axios from 'axios';
import { useState , useEffect} from 'react';
import { Button} from 'react-bootstrap';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiUserPlus } from 'react-icons/fi';
import AllModal from '../Components/AllModal';

const AllUsers =()=>{
    
    const [userData, setUserData] = useState([]);
    const [allModalVisible, setAllModalVisible] = useState(false);
    const [action, setAction] = useState('add');
    const [index, setIndex] = useState(null)

    const getData =()=>{
      // console.log('get data function------');
      const token = JSON.parse(localStorage.getItem('authToken'));
      axios.get('http://localhost:5000/api/user/find',{ headers: { 'auth-token': token } })
      .then((response)=>{
        return setUserData(response.data);
      })
      .catch((error)=>{
        return console.log(error);
      })
    }

    useEffect(()=>{
      getData()
    },[])

    const createModal = ()=>{
      setAllModalVisible(true)
      setAction('add')
    }
  
    const viewData = (i)=>{
      setIndex(i)
      setAction('edit')
      setAllModalVisible(true)
    }
    
    const onDelete = (i)=>{
      const userDetails = userData[i];
      let url = 'http://localhost:5000/api/user/delete/'+userDetails._id;
      axios.delete(url)
      .then((response)=>{
        getData()
        return console.log(response);
      })
      .catch((error)=>{
        return console.log(error);
      })
    }
    return(
        <>
        <div className='container'>
          <Button className='float-end mt-3 border-0 add-btn'  onClick={createModal}><FiUserPlus/> User</Button>
          <h3 className='text-center mt-2 mb-3'>USERS DATA</h3>
          <div className='table-div mt-5'>
          <table >
            <thead>
              <tr className='t-head'>
                <th>SL NO</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Age</th>
                <th>Adhaar</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 && userData.map((data, i) => 
                <tr key={i} className='t-body'>
                  <td>{i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td> 
                  <td>{data.age}</td>
                  <td>{data.adhaar}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td><button className='border-0 rounded ed-btn' onClick={()=>viewData(i)} ><BiEditAlt color='white' /></button><button  className='ms-3 border-0 rounded ed-btn' onClick={()=>onDelete(i)}><RiDeleteBinLine color='white' /></button></td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
        {allModalVisible && <AllModal
          setAllModalVisible = {setAllModalVisible}
          action = {action}
          userData = {userData}
          getData = {getData}
          editIndex={index}
        />}
        </>
    )
}
export default AllUsers;