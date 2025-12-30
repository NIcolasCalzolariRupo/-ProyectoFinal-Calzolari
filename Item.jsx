import { Link } from "react-router-dom";

export default function Item({ id, title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}
