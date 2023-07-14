import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//import Loader from "../../common/loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
// import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { itemName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(dataBase, "products");

    let consult;

    if (!itemName) {
      consult = itemsCollection;
    } else {
      consult = query(itemsCollection, where("category", "==", itemName));
    }
    getDocs(consult)
      .then((answer) => {
        let products = answer.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
  }, [itemName]);

  return (
    // <div>{items.length > 0 ? <ItemList items={items} /> : <Loader />};</div>
    <ItemList items={items} />
  );
};

export default ItemListContainer;
