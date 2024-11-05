import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {

  return (
    <ul className="flex justify-between gap-6 text-[#939393] hover:text-[#212121] md:hidden">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">Home</li></NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">About</li> </NavLink>
      <NavLink to="/features" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">Features</li> </NavLink>
      <NavLink to="/use-cases" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">Use Cases</li> </NavLink>
      <NavLink to="/pricing" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">Pricing</li> </NavLink>
      <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}><li className="nav-link">Contact Us</li> </NavLink>
    </ul>
  );
};

export default Nav;

