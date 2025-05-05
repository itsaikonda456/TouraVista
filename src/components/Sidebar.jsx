import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";

import {
  faHome,
  faPlane,
  faSuitcase,
  faCalendar,
  faPhone,
  faBars,
  faTimes,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  // useEffect(() => {
  //   const checkAuth = () => {
  //     const user = localStorage.getItem("user");
  //     setIsAuthenticated(!!user);
  //   };
  
  //   checkAuth(); // check on mount
  
  //   window.addEventListener("storage", checkAuth); // for cross-tab changes
  
  //   return () => window.removeEventListener("storage", checkAuth);
  // }, []);
  

  const toggleSidebar = () => setIsOpen(!isOpen);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   window.dispatchEvent(new Event("storage"));   
  //    setIsAuthenticated(false);
  //   setIsOpen(false);
  //   navigate("/LoginForm");
  // };
  const {user, loginWithRedirect, isAuthenticated , logout}= useAuth0();
 console.log(" user", user);
 

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="mobile-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-container">
          <h2 >TravelEase</h2>
          <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={toggleSidebar} />
        </div>

        <nav className="nav-menu">
          <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </NavLink>

          <NavLink to="/destinations" className="nav-link" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faPlane} /> <span>Destinations</span>
          </NavLink>

          <NavLink to="/packages" className="nav-link" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faSuitcase} /> <span>Packages</span>
          </NavLink>

          <NavLink to="/bookings" className="nav-link" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faCalendar} /> <span>Bookings</span>
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faPhone} /> <span>Contact</span>
          </NavLink>

          {isAuthenticated ? (
            <div className="nav-link" onClick={(e)=> logout()}>
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </div>
          ) : (
            <NavLink to="/LoginForm" className="nav-link" onClick={(e)=> loginWithRedirect()}>
              <FontAwesomeIcon icon={faSignInAlt} /> <span>Login</span>
            </NavLink>
          )}
        </nav>
        {isAuthenticated && user && (
          <div className="user-profile">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <p className="user-name">{user.name}</p>
          </div>
        )}
      
      </div>
    </>
  );
};

export default Sidebar;
