import { useNavigate } from "react-router-dom";
import "./navbar.css"
import {useCallback, useContext} from "react";
import {AuthContext} from "../../../context/AuthProvider";
import useLoginModal from "../../../hooks/useLoginModal";

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const {user} = useContext(AuthContext);
  const loginModal = useLoginModal();

  const handleRegisterClick = () => {
    navigate("/register"); // Chuyển đến trang '/other'
  };

  const handleLoginClick = () => {
    navigate("/login"); // Chuyển đến trang '/other'
  };

  const handleLogoClick = () => {
    navigate("/"); // Chuyển đến trang '/other'
  };

  const adminRedirect = useCallback(() => {
    console.log(user)
    if (user){
      if (user.role === 1){
        navigate("/");
      }
      else {
        navigate("/admin");
      }
    }
    else {
      loginModal.onOpen();
    }
  },[user, loginModal]);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleLogoClick}>Booking</span>
        <div className="navItems">
          <button className="navButton" onClick={adminRedirect}>List your Hotel</button>
          <button className="navButton" onClick={handleRegisterClick}>Register</button>
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
