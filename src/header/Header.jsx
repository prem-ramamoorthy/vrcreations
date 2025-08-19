import { Link, NavLink } from 'react-router-dom';
import '../styles/headerStyle.css'

function Header() {
  return (
    <div className='header-page '>
      <div className="header">
        <nav className="navigation">
          <div className="container">
            <div className="nav-content">

              <div className="logo">
                <div className="logo-icon">
                  <a href="/">
                    <img
                      src="/assets/logo.png"
                      alt="VR Creations Logo"
                      height="50"
                      width="90"
                    />
                  </a>
                </div>
                <span className="logo-text">CREATIONS</span>
              </div>

              <div className="nav-links">
                <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
                <NavLink to="/services" className="nav-link">Services</NavLink>
                <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
              </div>

              <div className="sidebar-container">
                <button className="sidebar-toggle">&#9776;</button>
                <nav className="sidebar">
                  <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                  <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                  <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                </nav>
              </div>

              <NavLink to="/signin" className="btn btn-primary">Signin</NavLink>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
