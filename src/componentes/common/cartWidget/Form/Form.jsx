const Form = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h2>Este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" name="nombre" />
        <input type="text" placeholder="Ingrese su nombre" name="apellido" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
