import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <>
      <div>
        <ul className="navbar">
          <Link to="/">INICIO</Link>
          <Link to="/perfumes/perfumes">PERFUMES</Link>
          <Link to="/maquillajes/maquillajes">MAQUILLAJES</Link>
          <Link to="/unias/unias">UÑAS</Link>
          <Link>CONTACTO</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
