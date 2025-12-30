import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: { name: e.target.name.value, email: e.target.email.value },
      items: cart,
      total: totalPrice,
      date: serverTimestamp()
    };

    addDoc(collection(db, "orders"), order).then(res => {
      setOrderId(res.id);
      clearCart();
    });
  };

  return orderId ? (
    <h2>Compra realizada ✔ ID: {orderId}</h2>
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <button>Confirmar</button>
    </form>
  );
}
