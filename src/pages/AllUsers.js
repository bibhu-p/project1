import axios from 'axios';

const AllUsers =()=>{
    // const data = localStorage.getItem('authToken');
    // console.log(typeof(data));

    axios.get('http://localhost:5000/api/user/find')
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
    return(
        <>
        <h1>Users Data</h1>
        </>
    )
}
export default AllUsers;