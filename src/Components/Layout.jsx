import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Layout = () => {

  return (
    <>
      {/* <div className="d-flex ">
        <div className=" w-25  ">
          <SideBar />
        </div>
        <div className="w-75 " style={{height:"3rem"}}>
          <div className="">
            <NavBar />
          </div>
          <div className="">
            <div className="container card mt-3 ps-3">
            <Outlet />
            </div>
          </div>
        </div>
      </div> */}
      <div className="d-flex flex-row">
        <div style={{ width: "20%", height: "100vh" }}>
          <SideBar />
        </div>
        <div className=" d-flex flex-column" style={{ width: "80%", height: "100vh" }}>
          <div className="h-25"> 
            <NavBar />
          </div>
          <div className="h-75 ">
          <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout