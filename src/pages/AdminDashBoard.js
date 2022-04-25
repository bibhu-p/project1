const AdminDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    // console.log(data);
    return (
        <>
        <div className="container d-flex justify-content-evenly align-items-center">
            <div className="card d-flex justify-content-center align-items-center ms-3 " >
                <div className="card-body  justify-content-center align-items-center ms-3 h-50">
                    <h5 className="card-title">Name : {data.name}</h5>
                    <h6 className="card-text">E-mail : {data.email}</h6>
                </div>
            </div>
        </div>
        </>
    )
}
export default AdminDashBoard;