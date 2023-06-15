import { useEffect, useState } from "react";
import { footerCard } from "./footerMock";
import Footer from "./Footer";

const FooterContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(footerCard);
    });
    tarea
      .then((answer) => setItems(answer))
      .catch((error) => console.log(error));
  }, []);

  return <Footer items={items} />;
};

export default FooterContainer;
