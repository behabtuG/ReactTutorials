import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAMount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hashItems = cartCtx.items.length > 0;

  const cartitemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartitemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartitemRemoveHandler.bind(null, item.id)}
          onAdd={cartitemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total mount</span>
        <span>{totalAMount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          CLose
        </button>
        {hashItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
