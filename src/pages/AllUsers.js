import axios from 'axios';
import {Table , Button} from 'react-bootstrap';

const AllUsers =()=>{
    const data = localStorage.getItem('authToken');
    console.log(typeof(data));

    axios.get('http://localhost:5000/api/user/find',{ headers: { 'auth-token': data } })
    .then(function (response) {
    //   setSpinner(false)
    //   clear()
    //   localStorage.setItem("loggedInData", JSON.stringify(response.data.data));
    //   localStorage.setItem("authToken", JSON.stringify(response.data.token));
      console.log(response);
    //   navigate("/admin/dashboard");
      
    })
    .catch(function (error) {
    //   setSpinner(false)
    //   clear()
      return console.log(error);
    })

    const createModal = ()=>{

    }
    return(
        <>
        <div className='container'>
          <Button className='float-end' style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={createModal}>Add User</Button>
          <h3 className='text-center mb-3'>USERS DATA</h3>
          <Table bordered  >
            <thead >
              <tr>
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
            {/* <tbody>
              {myState.map((data, i) => 
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.age}</td>
                  <td><Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>viewData(i)} ><BiEditAlt color='black' /></Button><Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
                </tr>
              )}
            </tbody> */}
          </Table>
        </div>
        </>
    )
}
export default AllUsers;