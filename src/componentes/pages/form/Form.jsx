import { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");

  // const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  //console.log(userData);

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    };
    console.log(data);
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
