import { HiOutlineShoppingCart } from "react-icons/hi";
import { Box } from "@mui/material";
//import "./CartWidget.css";

const CartWidget = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "end", justifyContent: "center" }}>
      <HiOutlineShoppingCart size="30" />
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "2px 7px 1px 7px",
          borderRadius: "50%",
        }}
      >
        0
      </Box>
    </Box>
  );
};

export default CartWidget;
