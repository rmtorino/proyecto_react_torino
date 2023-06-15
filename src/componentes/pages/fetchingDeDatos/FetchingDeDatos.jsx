const FetchingDeDatos = ({ users, createUser }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <hr />
          </div>
        );
      })}

      <button onClick={createUser}>Crear Usuario</button>
    </div>
  );
};

export default FetchingDeDatos;
