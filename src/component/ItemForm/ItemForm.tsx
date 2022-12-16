import ImgInput from "./ImgInput/ImgInput";
import SelectInput from "./SelectInput/SelectInput";
import TextInput from "./TextInput/TextInput";
import styles from "./ItemForm.module.css";

interface UploadProps {
  addImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteImg: (index: number) => void;
  uploadImages: string[];
  nameRef: React.RefObject<HTMLInputElement>;
  categoryRef: React.RefObject<HTMLSelectElement>;
  brandRef: React.RefObject<HTMLInputElement>;
  sizeRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  contentRef: React.RefObject<HTMLTextAreaElement>;
  postOrPatchItem: () => void;
}

const ItemForm = ({
  addImg,
  deleteImg,
  uploadImages,
  nameRef,
  categoryRef,
  brandRef,
  sizeRef,
  priceRef,
  contentRef,
  postOrPatchItem,
}: UploadProps) => {
  return (
    <div className={styles.mainBlock}>
      <h1 className={styles.title}>상품 등록</h1>
      <div className={styles.inputBlock}>
        <TextInput
          title={"상품명"}
          placeholder={"상품명을 입력하세요"}
          inputRef={nameRef}
          type={"input"}
        />
        <SelectInput
          title={"카테고리"}
          optionData={[
            { value: "ring", viewData: "반지" },
            { value: "bracelet", viewData: "팔찌" },
            { value: "necklace", viewData: "목걸이" },
          ]}
          defaultValue={"ring"}
          selectRef={categoryRef}
        />
        <TextInput
          title={"브랜드"}
          placeholder={"브랜드를 입력하세요"}
          inputRef={brandRef}
          type={"input"}
        />
        <TextInput
          title={"사이즈"}
          placeholder={"사이즈를 , 로 구분하여 입력해주세요 ex) 12,13..."}
          inputRef={sizeRef}
          type={"input"}
        />
        <TextInput
          title={"가격"}
          placeholder={"가격을 입력하세요"}
          inputRef={priceRef}
          type={"input"}
        />
        <TextInput
          title={"상품 설명"}
          placeholder={"설명을 입력하세요"}
          inputRef={contentRef}
          type={"textArea"}
        />
        <ImgInput
          uploadImages={uploadImages}
          addImg={addImg}
          deleteImg={deleteImg}
        />
      </div>
      <button className={styles.submitButton} onClick={postOrPatchItem}>
        등록하기
      </button>
    </div>
  );
};

export default ItemForm;
