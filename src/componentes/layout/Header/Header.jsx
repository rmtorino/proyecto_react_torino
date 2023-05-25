import CartWidget from "../../common/cartWidget/CartWidget";
//import Login from "../../pages/Login/Login";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_name">PERFUMERIA BEAUTY</h1>
      <div className="header_menu">
        {/* <Login/> */}
        <CartWidget />
      </div>
    </div>
  );
};

export default Header;
