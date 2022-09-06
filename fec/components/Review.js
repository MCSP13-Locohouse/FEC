import React, { useEffect, useState } from "react";
import styles from "../styles/Review.module.css";
import ReviewModal from "./ReviewModal";
const Reviews = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [reviewAvg, setReviewAvg] = useState([])

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
        <div>
          {props.users.map((item, i) => (
            <div key={i}>
              {item.name_firstlast}
              <br></br>
              <div>
                {props.reviews.map((item, i) => (
                  <div key={i}>
                    {" "}
                    {/* below = need to have item comment equal to the user, this is a placeholder */}
                    {item.stars} Stars! {item.comment}
                  </div>
                ))}
                <br></br>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={openModal}>
        Show all reviews
      </button>
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
