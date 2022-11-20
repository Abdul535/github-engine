import { Link } from "react-router-dom"
function NavBar() {
  return (
    <div className="navbar">
      <Link to="/"> <i  className="fa-brands fa-github fa-2x"></i><p className="navbar-se"> Github Search Engine</p></Link>
      <div>
      </div>
    </div>
  )
}

export default NavBar;