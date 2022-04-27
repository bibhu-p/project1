const UserDashBoard =()=>{
    const data = JSON.parse(localStorage.getItem('loggedInData'));

    return(
        <div className="container d-flex justify-content-evenly align-items-center">
        <div className="card d-flex justify-content-center align-items-center ms-3 " >
            <div className="card-body  justify-content-center align-items-center ms-3 h-50">
                <h4 className="card-title">Name : {data.name}</h4>
                <h6 className="">E-mail : {data.email}</h6>
            </div>
        </div>
    </div>
    )
}
export default UserDashBoard;