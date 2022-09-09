import React, {useState} from "react";
import styles from "../styles/GalleryModal.module.css";
import Image from "next/image";
const GalleryModal = ({ showModal, setShowModal, onClose }) => {
    const [modal, setModal] = useState(false);

    return (
      <>
        {showModal ? (
          <>
            {/* <div className={styles.modalOverlay} onClick={onClose} /> */}

            <div className={styles.modalContainer}>
              <div className={styles.header}>
                <button className={styles.button} onClick={onClose}>
                  {"<"}
                </button>
                <div>
                  <button className={styles.shareButton}>Share</button><button className={styles.saveButton}>Save</button>
                </div>
              </div>
              <div className={styles.gallery}>
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/1.PNG"
                />

                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/2.PNG"
                />

                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/3.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/4.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/5.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/6.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/7.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/8.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  //   objectFit=""
                  src="/9.PNG"
                />
                <Image
                  alt="Landscape picture"
                  width={300}
                  height={200}
                  objectFit="none"
                  src="/10.PNG"
                />
              </div>
            </div>
          </>
        ) : null}
      </>
    );
}

export default GalleryModal