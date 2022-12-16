import Images from "./Images/Images";
import TextInfo from "./TextInfo/TextInfo";
import styles from "./ItemDetail.module.css";
import common from "../../style/common.module.css";
import { Link } from "react-router-dom";
import { getItemType } from "../../type/item";

interface DetailProps {
  isLoading: boolean;
  isError: boolean;
  data?: getItemType;
  deleteItem: () => void;
}

const ItemDetail = ({ isLoading, isError, data, deleteItem }: DetailProps) => {
  if (isLoading) return <div className={common.except}>로딩중</div>;
  if (isError) return <div className={common.except}>에러발생</div>;
  if (data) {
    return (
      <div className={styles.mainBlock}>
        <div className={styles.infoBlock}>
          <Images images={data.images} />
          <TextInfo
            name={data.name}
            brand={data.brand}
            price={data.price}
            size={data.size}
          />
        </div>
        <div>
          <pre className={styles.content}>{data.content}</pre>
        </div>
        <div className={styles.buttonBlock}>
          <Link to={`/update/${data.id}`} className={styles.updateButton}>
            수정하기
          </Link>
          <button onClick={deleteItem} className={styles.deleteButton}>
            삭제하기
          </button>
        </div>
      </div>
    );
  }
  return null;
};

export default ItemDetail;
