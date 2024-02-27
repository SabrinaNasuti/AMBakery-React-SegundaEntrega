import { useEffect, useState } from "react";
import { getOneProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getOneProduct(id).then((resp) => setItem(resp));
    setIsLoading(false);
  }, [id]);

  return (
    <>{isLoading ? <h3>Cargando...</h3> : item && <ItemDetail {...item} />}</>
  );
};
