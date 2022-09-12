import React, { useEffect, useState } from "react";
import styles from "../styles/Review.module.css";
import ReviewModal from "./ReviewModal";
const Reviews = (props) => {
  const [showModal, setShowModal] = useState(false);
  const numOfReviews = props.reviews.length;
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div
      className="reviews"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <div className={styles.reviews}>
        <div className={styles.comments}>
          {props.reviews.map((users, i) => (
            <ul key={i}>
              <li>
                <b>{users.first_name}</b>
              </li>
              {users.stars} Stars! - {users.comment}
            </ul>
          ))}
        </div>
        <button className={styles.button} onClick={openModal}>
          Show all {numOfReviews} reviews
        </button>
      </div>
      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        users={props.users}
        reviews={props.reviews}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default Reviews;
