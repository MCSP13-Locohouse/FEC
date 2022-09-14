import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import GalleryModal from "./GalleryModal";

const Gallery = (props) => {
  console.log(props.reviews);
  let averageRating = 0;

  const reviewAverage = () => {
    for (let i = 0; i < props.reviews.length; i++) {
      const starNumbers = parseInt(props.reviews[i].stars);
      averageRating += starNumbers;
    }
    averageRating = averageRating / props.reviews.length;
    return averageRating;
  };

  reviewAverage();
  const [showModal, setShowModal] = useState(false); //this will be a modal later
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Treehouse Casita</h1>
        <div className={styles.desc}>
          {averageRating} · {props.reviews.length} Reviews · Not a Superhost ·
          Colorado Springs, Colorado, United States
          <button className={styles.shareButton}>
            <u>share</u>
          </button>
          <button className={styles.saveButton}>
            <u>save</u>
          </button>
        </div>
      </div>
      <br></br>

      <div className={styles.container}>
        <div className={styles.mainImage}>
          <Image
            loading="lazy"
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
          <Image
            loading="lazy"
            alt="Landscape picture"
            width={300}
            height={200}
            objectFit="cover"
            src="/2.PNG"
            onClick={openModal}
          />
        </div>
        <div className={styles.imageDivTwo}>
          <Image
            loading="lazy"
            alt="Landscape picture"
            width={300}
            height={200}
            objectFit="cover"
            src="/3.PNG"
            onClick={openModal}
          />
        </div>
        <div className={styles.imageDivThree}>
          <Image
            loading="lazy"
            alt="Landscape picture"
            width={300}
            height={200}
            objectFit="cover"
            src="/4.PNG"
            onClick={openModal}
            className={styles.imageDivThree}
          />
        </div>
        <div className={styles.imageDivFour}>
          <Image
            loading="lazy"
            alt="Landscape picture"
            width={300}
            height={200}
            objectFit="cover"
            src="/5.PNG"
            onClick={openModal}
            className={styles.imageDivFour}
          />
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
