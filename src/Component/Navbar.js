import {Link} from "react-router-dom"
import tickitz from "../img/Tickitz.svg"


function Navbar() {
    return(
        <>
        <nav className="navbar navbar-desktop navbar-expand-lg bg-fourth ">
        <div className="container-fluid ">
            <Link to="/">
                <a className="navbar-brand" >
                    <img src={tickitz} alt="logo-tickitz" />
                </a>
            </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/">
                <a className="nav-link active bold" aria-current="page" href="">Movies</a>
              </Link> 
              </li>
              <li className="nav-item">
              <Link to="/cinema">
              <a className="nav-link active bold" >Cinema</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/schedule">
              <a className="nav-link active bold" >Schedule</a>
              </Link>
              </li>
            </ul>
          </div>
          <h1 className="font-d-m main-color bold">Admin</h1>
        </div>
      </nav>

      
        </>
        
        
        
    )
}

export default Navbar