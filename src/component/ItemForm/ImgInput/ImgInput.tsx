import { AiOutlinePicture } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import styles from "./ImgInput.module.css";

interface ImgInputProps {
  addImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteImg: (index: number) => void;
  uploadImages: string[];
}

const ImgInput = ({ addImg, deleteImg, uploadImages }: ImgInputProps) => {
  return (
    <div>
      <h2 className={styles.title}>상품 이미지</h2>
      <ul className={styles.imgsBlock}>
        <label htmlFor="img" className={styles.fileButton}>
          <div className={styles.imgButtonTitle}>이미지</div>
          <div>
            <AiOutlinePicture size="40" />
          </div>
          <div className={styles.fileCount}>{`(${uploadImages.length}/5)`}</div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="img"
          multiple
          onChange={addImg}
          className={styles.realFileButton}
        />
        {uploadImages.map((src, index) => {
          return (
            <li className={styles.imgBlock} key={index}>
              <img src={src} className={styles.img} alt=""></img>
              <div
                className={styles.imgDeleteButton}
                onClick={() => deleteImg(index)}
              >
                <ImCross
                  size={20}
                  style={{ color: "white", opacity: "1" }}
                ></ImCross>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImgInput;
