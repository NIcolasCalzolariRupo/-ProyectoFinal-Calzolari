import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail(item) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (qty) => {
    addItem(item, qty);
    setAdded(true);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      {item.stock === 0
        ? <p>Sin stock</p>
        : !added && <ItemCount stock={item.stock} onAdd={onAdd} />}
    </div>
  );
}
