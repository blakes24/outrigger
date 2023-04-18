import Image, { StaticImageData } from "next/image";
import styles from "../styles/Hero.module.css";

export const Hero: React.FC = ({
  img,
  altText,
  text,
}: {
  img: StaticImageData;
  altText: string;
  text: string;
}) => {
  return (
    <div className={styles.main}>
      <Image className={styles.pic} src={img} alt={altText} fill />
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};
