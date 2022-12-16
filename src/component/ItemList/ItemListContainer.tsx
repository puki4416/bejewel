import axios from "axios";
import { useQuery } from "react-query";
import { getItemsType } from "../../type/item";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { isLoading, isError, data } = useQuery<unknown, unknown, getItemsType>(
    ["contents"],
    async () => {
      const { data } = await axios.get("http://localhost:8080/contents");
      return data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );
  return (
    <ItemList isLoading={isLoading} isError={isError} responseData={data} />
  );
};

export default ItemListContainer;
