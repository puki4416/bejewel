import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getItemType, getItemsType } from "../../type/item";
import Detail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams() as { id: string };
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery<
    unknown,
    AxiosError,
    getItemType
  >(
    ["contents", id],
    async () => {
      const { data } = await axios.get(`http://localhost:8080/contents/${id}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (e) => {
        if (e.response?.status === 404) {
          alert("비정상적 접근입니다");
          navigate("/");
        }
      },
    }
  );

  const deleteMutation = useMutation(
    (id: string) => axios.delete(`http://localhost:8080/contents/${id}`),
    {
      onSuccess: () => {
        queryClient.setQueryData<getItemsType | undefined>(
          ["contents"],
          (queryData) => {
            if (queryData !== undefined) {
              return queryData.filter((v) => v.id !== Number(id));
            }
          }
        );
        alert("삭제되었습니다");
        navigate("/");
      },
    }
  );

  const deleteItem = () => {
    if (window.confirm("삭제하시겠습니까?")) deleteMutation.mutate(id);
  };

  return (
    <Detail
      isLoading={isLoading}
      isError={isError}
      data={data}
      deleteItem={deleteItem}
    />
  );
};

export default ItemDetailContainer;
