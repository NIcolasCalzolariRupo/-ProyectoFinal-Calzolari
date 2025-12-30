import { useState } from "react";

export default function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count < stock && setCount(count + 1)}>+</button>
      <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
}
