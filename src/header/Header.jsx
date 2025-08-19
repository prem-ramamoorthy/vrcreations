function Header() {
  return (
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
              <a href="/protfolio" className="nav-link">Portfolio</a>
              <a href="/contactus" className="nav-link">Contact Us</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/aboutus" className="nav-link">About Us</a>
            </div>

            <div className="sidebar-container">
              <button className="sidebar-toggle">&#9776;</button>
              <nav className="sidebar">
                <a href="/protfolio" className="nav-link">Portfolio</a>
                <a href="/contactus" className="nav-link">Contact Us</a>
                <a href="/services" className="nav-link">Services</a>
                <a href="/aboutus" className="nav-link">About Us</a>
              </nav>
            </div>

            <a href="/loginpage/index.html" className="btn btn-primary">Signin</a>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
