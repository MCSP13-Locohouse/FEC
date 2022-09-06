import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import { ReactDOM } from "react";
const Gallery = (props) => {
  const [showModal, setShowModal] = useState(false);
  


  return (
    <div className={styles.container}>
       <Image
        src="/1.PNG"
        alt="Landscape picture"
        width="520%"
        height="520%"
        className={styles.mainImage}
        objectFit="cover"
      />
      <div className={styles.imageDiv}></div>
      <Image
        src="/2.PNG"
        alt="Landscape picture"
        className={styles.altImageTop}
      />
      <Image
        src="/3.PNG"
        alt="Landscape picture"
        width="10%"
        height="10%"
        className={styles.altImageTop}
      />
    </div>
  );
};

export default Gallery;
