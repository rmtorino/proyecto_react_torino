import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productSelected, setPorductSelected] = useState({});

  const { addToCart, getTotalQuantityBiId } = useContext(CartContext);
  const { id } = useParams();

  const quantity = getTotalQuantityBiId(id);
  console.log("La cantidad es: ", quantity);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Porducto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(dataBase, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((answer) => {
      setPorductSelected({ ...answer.data(), id: answer.id });
    });
  }, [id]);

  return (
    <ItemDetail
      quantity={quantity}
      productSelected={productSelected}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  );
};

export default ItemDetailContainer;
