import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { section } = useParams();

  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (section) {
        const filterbysection = resp.filter(
          (product) => product.section == section
        );
        setproducts(filterbysection);
      } else {
        setproducts(resp);
      }
      setIsLoading(false);
    });
  }, [section]);

  return (
    <>{isLoading ? <h3>Cargando...</h3> : <ItemList products={products} />};</>
  );
};
