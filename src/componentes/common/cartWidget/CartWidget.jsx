import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return <h1>Este es el Carrito</h1>;
};

export default CartWidget;
