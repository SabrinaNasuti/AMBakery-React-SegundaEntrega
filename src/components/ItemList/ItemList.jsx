import { Item } from "../Item/Item";

// Aca renderiza

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
