import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import GalleryModal from "./GalleryModal";

const Gallery = (props) => {
  const [showModal, setShowModal] = useState(false);  //this will be a modal later 
  const openModal = () => {
    setShowModal((prev) => !prev);
  };


  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Treehouse Casita</h1>
      <br></br>
      <div className={styles.desc}>
        5.0 · 1 reviews · Superhost · Colorado Springs, Colorado, United States
        <button className={styles.shareButton}>
          <u>share</u>
        </button>
        <button className={styles.saveButton}>
          <u>save</u>
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.mainImage}>
          <Image
            src="/1.PNG"
            alt="Landscape picture"
            width="500%"
            height="405%"
            objectFit="cover"
            className={styles.bigImage}
            onClick={openModal}
          />
        </div>
        <div className={styles.imageDivOne}>
          <Image alt="Landscape picture" width={300} height={200} objectFit="cover" src="/2.PNG" onClick={openModal}/>
        </div>
        <div className={styles.imageDivTwo}>
          <Image alt="Landscape picture" width={300} height={200} objectFit="cover" src="/3.PNG" onClick={openModal}/>
        </div>
        <div className={styles.imageDivThree}>
          <Image alt="Landscape picture" width={300} height={200} objectFit="cover" src="/4.PNG" onClick={openModal} className={styles.imageDivThree}/>
        </div>
        <div className={styles.imageDivFour}>
          <Image alt="Landscape picture" width={300} height={200} objectFit="cover" src="/5.PNG" onClick={openModal} className={styles.imageDivFour}/>
        </div>
      </div>
      <GalleryModal 
         showModal={showModal}
         setShowModal={setShowModal}
         onClose={openModal}
      />
    </div>
  );
};

export default Gallery;