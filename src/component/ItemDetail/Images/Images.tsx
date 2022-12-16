import { useState } from "react";
import styles from "./Images.module.css";

interface imagesProps {
  images: string[];
}

const Images = ({ images }: imagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className={styles.mainBlock}>
      <img
        src={images[currentImage]}
        alt="currentImage"
        className={styles.currentImage}
      />
      <div className={styles.miniImageBlock}>
        {images.map((src, index) => {
          return (
            <img
              src={src}
              alt="miniImage"
              className={`${styles.miniImage} ${
                currentImage === index ? styles.selectedImg : ""
              }`}
              onClick={() => setCurrentImage(index)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
