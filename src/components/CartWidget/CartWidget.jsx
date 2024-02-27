import pinkCart from "../../assets/pinkCart.jpg";
import cartWidgetStyle from "./CartWidgetStyle/CartWidgetStyle.module.css";

export const CartWidget = () => {
  return (
    <div className=" justify-content-around mt-2 bg-danger-subtle">
      <img
        src={pinkCart}
        alt="pink-cart-widget"
        className={cartWidgetStyle.image}
      />
      0
    </div>
  );
};
