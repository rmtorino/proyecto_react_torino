import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header_name">PERFUMERIA BEAUTY</h1>
      </Link>

      <div className="header_menu">
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
