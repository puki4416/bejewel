import ItemCard from "./Item/Item";
import styles from "./ItemList.module.css";
import common from "../../style/common.module.css";
import { getItemsType } from "../../type/item";

interface ItemListProps {
  isLoading: boolean;
  isError: boolean;
  responseData?: getItemsType;
}

const ItemList = ({ isLoading, isError, responseData }: ItemListProps) => {
  if (isLoading) return <div className={common.except}>로딩중</div>;
  if (isError) return <div className={common.except}>에러발생</div>;
  if (responseData?.length === 0)
    return <div className={common.except}>결과없음</div>;
  return (
    <div className={styles.mainBlock}>
      <h1 className={styles.title}>상품 리스트</h1>
      <div className={styles.itemList}>
        {responseData?.map((values) => {
          return <ItemCard {...values} key={values.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
