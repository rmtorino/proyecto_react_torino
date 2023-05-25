import { useState } from "react";

const Counter = () => {

   //const [nombreVariable, funcionmodifica] = useState(0);
   
   const [contador, setContador] = useState(0)



   
    
  return (
    <div>
        <h2>{contador}</h2>
        <button onClick={()=> setContador(contador + 1)}>Sumar</button>
        <button onClick={()=> setContador(contador - 1)}>Restar</button>
        <button onClick={()=> setContador(0)}>Vaciar</button>
    </div>
  )
}

export default Counter