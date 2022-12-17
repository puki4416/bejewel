import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getItemsType, ItemFormType, getItemType } from "../../type/item";
import Upload from "./ItemForm";

const ItemFormContainer = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [uploadImages, setuploadImages] = useState<string[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const sizeRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const navigation = useNavigate();

  useEffect(() => {
    if (id) {
      const data = queryClient.getQueryData<getItemType>(["contents", id]);
      if (data === undefined) {
        alert("비정상적 접근입니다");
      } else {
        const { name, category, size, brand, price, images, content } = data;
        const beforeData = [name, category, size, brand, price, content];
        [nameRef, categoryRef, sizeRef, brandRef, priceRef, contentRef].forEach(
          (ref, index) => {
            if (ref.current !== null) ref.current.value = beforeData[index];
          }
        );
        setuploadImages(images);
      }
    }
  }, [id, queryClient]);

  const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (e.target.files.length + uploadImages.length > 5) {
        alert("파일 최대갯수를 초과하였습니다 삭제후 추가해주세요");
      } else {
        const imgs: string[] = [...uploadImages];
        let sizeUpper = false;
        for (let i = 0; i < e.target.files.length; i++) {
          if (e.target.files[i].size > 5242880) {
            sizeUpper = true;
            continue;
          }
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[i]);
          reader.onload = function () {
            if (reader.result !== null) {
              imgs.push(reader.result as string);
              if (e.target.files !== null)
                if (i === e.target.files.length - 1) {
                  setuploadImages(imgs);
                }
            }
          };
        }
        if (sizeUpper) {
          alert("사이즈 초과된 사진이 있습니다");
        }
      }
    }
  };

  const deleteImg = (index: number) => {
    const newUploadImages = [...uploadImages];
    newUploadImages.splice(index, 1);
    setuploadImages(newUploadImages);
  };

  const validation = () => {
    const result = [];
    if (nameRef.current !== null && nameRef.current.value === "")
      result.push("이름");
    if (categoryRef.current !== null && categoryRef.current.value === "")
      result.push("카테고리");
    if (brandRef.current !== null && brandRef.current.value === "")
      result.push("브랜드");
    if (sizeRef.current !== null && sizeRef.current.value === "")
      result.push("사이즈");
    if (priceRef.current !== null && priceRef.current.value === "")
      result.push("가격");
    if (contentRef.current !== null && contentRef.current.value === "")
      result.push("상품 설명");
    if (uploadImages.length === 0) result.push("이미지");

    if (result.length) {
      alert(`${result.join(", ")}에 입력이 되지않았습니다`);
      return false;
    }
    return true;
  };

  const postMutation = useMutation(
    (item: ItemFormType) => axios.post("http://localhost:8080/contents", item),
    {
      onSuccess: (e) => {
        queryClient.setQueryData<getItemsType | undefined>(
          ["contents"],
          (data) => {
            if (data !== undefined) {
              const currentItems = data;
              currentItems.push(e.data);
              return currentItems;
            }
          }
        );
        alert("등록되었습니다");
        navigation("/");
      },
    }
  );

  const patchMutation = useMutation(
    (item: ItemFormType) =>
      axios.patch(`http://localhost:8080/contents/${id}`, item),
    {
      onSuccess: (e) => {
        queryClient.setQueryData<getItemsType | undefined>(
          ["contents"],
          (items) => {
            if (items !== undefined) {
              return items.map((item) => {
                if (item.id === Number(id)) return e.data;
                return item;
              });
            }
          }
        );
        queryClient.setQueryData(["contents", id], () => e.data);
        alert("수정되었습니다");
        navigation(`/product/${id}`);
      },
    }
  );

  const postOrPatchItem = () => {
    if (!validation()) return 0;
    const body = {
      name: nameRef.current !== null ? nameRef.current.value : "",
      category: categoryRef.current !== null ? categoryRef.current.value : "",
      brand: brandRef.current !== null ? brandRef.current.value : "",
      size: sizeRef.current !== null ? sizeRef.current.value : "",
      price: priceRef.current !== null ? priceRef.current.value : "",
      content: contentRef.current !== null ? contentRef.current.value : "",
      images: uploadImages,
    };
    if (id) patchMutation.mutate(body);
    if (!id) postMutation.mutate(body);
  };

  return (
    <Upload
      uploadImages={uploadImages}
      addImg={addImg}
      deleteImg={deleteImg}
      nameRef={nameRef}
      categoryRef={categoryRef}
      brandRef={brandRef}
      sizeRef={sizeRef}
      priceRef={priceRef}
      contentRef={contentRef}
      postOrPatchItem={postOrPatchItem}
    />
  );
};

export default ItemFormContainer;
