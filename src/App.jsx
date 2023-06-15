//import GridComponent from "./componentes/common/gridComponent/GridComponent";
import CartWidget from "./componentes/common/cartWidget/CartWidget";
import Form from "./componentes/common/cartWidget/Form/Form";
import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/pages/productDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/perfumes/:itemName" element={<ItemListContainer />} />
          <Route
            path="/maquillajes/:itemName"
            element={<ItemListContainer />}
          />
          <Route path="/unias/:itemName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/form" element={<Form />}></Route>
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
