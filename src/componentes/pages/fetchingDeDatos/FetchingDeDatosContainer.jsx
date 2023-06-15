import { useEffect, useState } from "react";
import FetchingDeDatos from "./FetchingDeDatos";

const FetchingDeDatosContainer = () => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");

    promiseData
      .then((answer) => answer.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Este es el error: ", error));
  }, []);

  const createUser = () => {
    let dataUser = {
      name: "Ricardo",
      userName: "Torino",
      email: "ricardo.torino@hotmail.com",
    };
    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(dataUser),
    });

    promise
      .then((answer) => answer.json())
      .then((data) =>
        console.log("El usuario fue creado con la siguiente informacion ", data)
      )
      .catch((error) => console.log(error));
  };

  return <FetchingDeDatos users={users} createUser={createUser} />;
};

export default FetchingDeDatosContainer;
