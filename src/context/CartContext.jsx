//CREO EL CONTEXTO
import { createContext, useState } from "react";

export const CartContext = createContext();

//CREO EL COMPONENTE PROVEEDOR DEL CONTEXTO
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (productToAdd) => {
    let exist = isInCart(productToAdd.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === productToAdd.id) {
          return {
            ...product,
            quantity: productToAdd.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, productToAdd]);
      localStorage.setItem("cart", JSON.stringify([...cart, productToAdd]));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalQuantityBiId = (id) => {
    let item = cart.find((product) => product.id === id);

    return item?.quantity;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityBiId,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
