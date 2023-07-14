import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dataBase } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useState } from "react";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(dataBase, "orders");

      addDoc(ordersCollection, order).then((answer) => setOrderId(answer.id));

      cart.forEach((product) => {
        updateDoc(doc(dataBase, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Debe ingresar su nombre")
        .min(3, "Ingrese minimo tres caracteres"),
      email: Yup.string()
        .email("Ingrese un mail valido")
        .required("El campo no puede quedar vacio"),
      phone: Yup.string().required("El campo no puede quedar vacio"),
    }),
  });

  console.log(errors);
  return (
    <div>
      {orderId ? (
        <h1>Su compra fue exitosa. El numero de comprobante es : {orderId}</h1>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
