import { useCount } from "../../hooks/useCount";

import itemDetailStyle from "./ItemDetail.module/ItemDetail.module.css";

export const ItemDetail = ({ id, name, price, image, section }) => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="border m-2 ">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <img src={image} alt="" className={itemDetailStyle.image} />
          <div className="card-body btn-outline-dark">
            <p>Precio: ${price}</p>
            <button className="btn btn-outline-dark" onClick={increment}>
              +
            </button>
            <span className="mx-3"> {count} </span>
            <button className="btn btn-outline-dark" onClick={decrement}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
