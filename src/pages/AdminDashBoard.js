const AdminDashBoard = () => {
    const data = JSON.parse(localStorage.getItem('loggedInData'));
    // console.log(data);
    return (
        <>
            <div className="container m-5 ">
                <div className="row mb-3">
                    <div className="col">
                        <div className="card nav-div w-75 ">
                            <div className="card-body">
                                <h5 className="card-title">Info</h5>
                                <p className="card-text">Name : {data.name}</p>
                                <p className="card-text">Email : {data.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminDashBoard;