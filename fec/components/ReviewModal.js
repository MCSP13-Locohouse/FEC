import react, { useState } from "react";
import styles from "../styles/ReviewModal.module.css";

const ReviewModal = ({ showModal, setShowModal, onClose, users, reviews }) => {
  const [modal, setModal] = useState(false);
  console.log(users);
  return (
    <>
      {showModal ? (
        <>
          <div className={styles.modalOverlay} />

          <div className={styles.reviewModal}>
            <div className={styles.header}>
              {" "}
              {/* header div start point */}
              <input
                className={styles.search}
                placeholder="Search reviews"
              ></input>
              <button onClick={onClose} className={styles.button}>
                X
              </button>
            </div>{" "}
            {/* header div end point */}
            <div className={styles.ratings}>Overall Reviews Placeholder</div>
            {users.map((item, i) => (
              <div className={styles.comments} key={i}>
                {item.name_firstlast}
                {reviews.map((item, i) => (
                  <ul>
                    <li key={i}>
                      {/* below = need to have item comment equal to the user, this is a placeholder */}
                      {item.stars} Stars! {item.comment}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReviewModal;
