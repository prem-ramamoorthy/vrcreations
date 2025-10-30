import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/headerStyle.css';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loadingAction, setLoadingAction] = useState(''); 
  const loading = !!loadingAction;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      setLoadingAction('logout');
      await signOut(auth);
      navigate('/signin', { replace: true });
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAction('');
    }
  };
  const renderAuthButton = () => {
    if (!user) {
      return (
        <NavLink
          to="/signin"
          className={`btn btn-primary ${loading ? 'disabled' : ''}`}
          aria-disabled={loading}
          onClick={(e) => {
            if (loading) e.preventDefault();
          }}
        >
          {loading ? 'Loading...' : 'Signin'}
        </NavLink>
      );
    }
    return (
      <button
        className="btn btn-primary"
        onClick={handleLogout}
        disabled={loading}
      >
        {loadingAction === 'logout' ? 'Logging out...' : 'Logout'}
      </button>
    );
  };

  return (
    <div className="header-page">
      <div className="header">
        <nav className="navigation">
          <div className="container">
            <div className="nav-content">

              <div className="logo">
                <div className="logo-icon">
                  <NavLink to="/" onClick={(e) => loading && e.preventDefault()}>
                    <img
                      src="/assets/logobw.png"
                      alt="VR Creations Logo"
                      height="50"
                      width="90"
                      style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.7 : 1 }}
                    />
                  </NavLink>
                </div>
                <span className="logo-text">CREATIONS</span>
              </div>

              <div className="nav-links" aria-disabled={loading}>
                <NavLink
                  to="/portfolio#"
                  className="nav-link"
                  onClick={(e) => loading && e.preventDefault()}
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/contactus#"
                  className="nav-link"
                  onClick={(e) => loading && e.preventDefault()}
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/services#"
                  className="nav-link"
                  onClick={(e) => loading && e.preventDefault()}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/aboutus#"
                  className="nav-link"
                  onClick={(e) => loading && e.preventDefault()}
                >
                  About Us
                </NavLink>
              </div>

              <div className="sidebar-container" aria-disabled={loading}>
                <button className="sidebar-toggle" disabled={loading}>
                  &#9776;
                </button>
                <nav className="sidebar">
                  <NavLink
                    to="/portfolio#"
                    className="nav-link"
                    onClick={(e) => loading && e.preventDefault()}
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    to="/contactus#"
                    className="nav-link"
                    onClick={(e) => loading && e.preventDefault()}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/services#"
                    className="nav-link"
                    onClick={(e) => loading && e.preventDefault()}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/aboutus#"
                    className="nav-link"
                    onClick={(e) => loading && e.preventDefault()}
                  >
                    About Us
                  </NavLink>
                </nav>
              </div>

              {renderAuthButton()}

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
