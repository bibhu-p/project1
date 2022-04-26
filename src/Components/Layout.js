import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Layout= ()=> {

  return (
    <>
    <div className="d-flex ">
      <div className=" w-25 side-div ">
        <SideBar />
      </div>
      <div className=" d-flex flex-column">
        <div className="nav-div sticky-top overflow-hidden">
          <NavBar />
        </div>
        <div className="container lay-body">
          <div className="container card mt-5 p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout