import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { itemName } = useParams();

  useEffect(() => {
    let filterProducts = products.filter(
      (element) => element.category === itemName
    );
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemName ? filterProducts : products);
      }, 500);
    });
    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((error) => {
        console.log("catch: ", error);
      });
  }, [itemName]);

  return (
    <div>
      <ItemList items={items} />;
    </div>
  );
};

export default ItemListContainer;
