
import { useState } from "react";
import Header from "./componentes/layout/Header/Header";
import Navbar from "./componentes/layout/Navbar/Navbar";
import ItemListContainer from "./componentes/pages/itemListContainer/ItemListContainer";



function App() {
  //logica

  //const [montado, setMontado] = useState(false);

  //JSX
  return(
    

    <div> 
      <Header/>
      <Navbar/>
      <ItemListContainer greating={"Bienvenidos!!!"}/>
      {/* {
        montado && <ItemListContainer/>
      }
      <button>Montar Componente</button> */}
      
      

    </div>
    



  )
}

export default App;
