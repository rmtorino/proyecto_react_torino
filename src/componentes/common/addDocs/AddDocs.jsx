import { Button } from "@mui/material";
import { products } from "../../../productsMock";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const AddDocs = () => {
  const rellenar = () => {
    let itemsCollection = collection(dataBase, "products");
    products.forEach((element) => {
      addDoc(itemsCollection, element);
    });
  };
  return (
    <div>
      <Button onClick={rellenar}>Rellenar mi coleccion de productos</Button>
    </div>
  );
};

export default AddDocs;
