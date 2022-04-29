import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Layout = () => {

  return (
    <>
      <div className="d-flex flex-row ">
        <SideBar />
        <div className="w-100 d-flex flex-column">
          <div className="sticky-top">
            <NavBar />
          </div>
          <div className="flex-grow-1 bg-light" style={{ overflowY: "", overflowX: "hidden" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout