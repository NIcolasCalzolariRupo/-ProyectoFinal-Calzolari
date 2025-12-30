import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      {cart.map(item => <CartItem key={item.id} {...item} />)}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}
