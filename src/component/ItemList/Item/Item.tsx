import { Link } from "react-router-dom";
import styles from "./Item.module.css";

interface ItemCardProps {
  id: number;
  brand: string;
  name: string;
  price: string;
  images: string[];
}

const ItemCard = ({ id, brand, name, price, images }: ItemCardProps) => {
  console.log();
  return (
    <article className={styles.mainBlock}>
      <Link to={`product/${id}`}>
        <div>
          <img src={images[0]} alt="mainImage" className={styles.img}></img>
          <div className={styles.brand}>{brand}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}</div>
        </div>
      </Link>
    </article>
  );
};

export default ItemCard;
