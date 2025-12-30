import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", itemId))
      .then(res => setItem({ id: res.id, ...res.data() }));
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
}
