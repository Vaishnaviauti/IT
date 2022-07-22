
import {Link} from "react-router-dom"
const Navbar = () =>{
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QxaPONTvqu5GH2RuVYkI2s2MozucbY23Q8oplxKC8w&s"></img>CWIPEDIA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item">
          <Link to ="/home page" className="nav-link">Home Page</Link>
        </li>
        
      <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        
        <li className="nav-item">
          <Link to="Team" className="nav-link">Team</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>)
}
export default Navbar;