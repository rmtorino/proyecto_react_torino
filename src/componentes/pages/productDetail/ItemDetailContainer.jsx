import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setPorductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve) => {
      resolve(productFind);
    });
    getProduct
      .then((answer) => setPorductSelected(answer))
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail productSelected={productSelected} />;
};

export default ItemDetailContainer;
