
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/"><img src='/hb_favi.png' id='hblogo' alt='logo' /></Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/reg">Register</Link>
                    <Link className="nav-link" to="/userhome" >My Home</Link>
                </div>
            </div>
        </div>
        </nav >
    );
}
export default Navbar;