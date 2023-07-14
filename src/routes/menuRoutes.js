import CartWidget from "../componentes/pages/cartWidget/CartWidget";
import Form from "../componentes/pages/form/Form";
import ItemListContainer from "../componentes/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../componentes/pages/itemDetail/ItemDetailContainer";
import CheckoutContainer from "../componentes/pages/checkout/CheckoutContainer";
import FormFormik from "../componentes/pages/formFormik/FormFormik";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/perfumes/:itemName",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/maquillajes/:itemName",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/unias/:itemName",
    Element: ItemListContainer,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartWidget,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
