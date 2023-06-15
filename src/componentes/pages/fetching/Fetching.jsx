import { useEffect, useState } from "react";

import { productsInstance } from "../../../api/axiosInstance";
productsInstance;

const Fetching = () => {
  const [products, setProducts] = useState([]);

  //GET ALL
  useEffect(() => {
    const getData = productsInstance.get("");
    getData
      .then((answer) => setProducts(answer.data))
      .catch((error) => console.log(error));
  }, []);
  //GET BY ID
  useEffect(() => {
    const getProduct = productsInstance.get("/1");
    getProduct
      .then((answer) => console.log(answer.data))
      .catch((error) => console.log(error));
  }, []);
  //POST
  const createProduct = () => {
    let data = {
      title: "Producto crado con axios",
      description: "Eau de Toiilete 50 ml",
      price: 9500,
      stock: 10,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/201514-800-auto?v=638085739625570000&width=800&height=auto&aspect=true",
      categoria: "mujer",
    };
    const createdProduct = productsInstance.post("", data);
    createdProduct
      .then((answer) => console.log(answer))
      .catch((res) => console.log(res));
  };
  //PUT
  const cambiarTodoElProducto = () => {
    let data = {
      title: "Producto Modificado con PUT",
      description: "Eau de Toiilete 50 ml",
      price: 9500,
      stock: 10,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/201514-800-auto?v=638085739625570000&width=800&height=auto&aspect=true",
      categoria: "mujer",
    };
    productsInstance.put("/5", data);
  };
  //PATCH
  const modificarElProducto = () => {
    let data = {
      title: "Producto Modificado con PATCH",
      description: "Eau de Toiilete 50 ml",
      price: 9500,
      stock: 10,
      img: "https://juleriaque.vtexassets.com/arquivos/ids/201514-800-auto?v=638085739625570000&width=800&height=auto&aspect=true",
      categoria: "mujer",
    };
    productsInstance.patch("/5", data);
  };
  //DELETE
  const eliminarProducto = () => {
    productsInstance.delete("/5");
  };

  return (
    <div>
      {products.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
      <button onClick={createProduct}>Crear Producto</button>
      <button onClick={cambiarTodoElProducto}>
        Cambiar el Producto con PUT
      </button>
      <button onClick={modificarElProducto}>
        Modificar el Producto con Patch
      </button>
      <button onClick={eliminarProducto}>Eliminar Producto</button>
    </div>
  );
};

export default Fetching;
