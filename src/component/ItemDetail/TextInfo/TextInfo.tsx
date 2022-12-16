import styles from "./TextInfo.module.css";

interface TextInfoProps {
  name: string;
  brand: string;
  price: string;
  size: string;
}

const TextInfo = ({ name, brand, price, size }: TextInfoProps) => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.brand}>{brand}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}원</div>
      <div>
        <select className={styles.select}>
          {size.split(",").map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default TextInfo;
