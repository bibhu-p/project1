import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Layout= ()=> {

  return (
    <>
    <NavBar />
    <div className="d-flex flex-row p-3">
      <SideBar />
      <Outlet />
    </div>
    </>
  )
}

export default Layout