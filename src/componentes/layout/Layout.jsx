import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FooterContainer from "./Footer/FooterContainer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <FooterContainer />
    </div>
  );
};

export default Layout;
