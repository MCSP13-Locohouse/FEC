import React, { useEffect, useState } from "react";
import styles from "../styles/Review.module.css";
import ReviewModal from "./ReviewModal";
const Reviews = (props) => {
  const [showModal, setShowModal] = useState(false);
  const reviews = props
  console.log(reviews, "props")
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
setTimeout(() => {
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
                {reviews.map((item, i) => (
                  <div key={i}>
                    {console.log(item)}
                    {" "}
                    {/* below = need to have item comment equal to the user, this is a placeholder */}
                    {item.stars} Stars! {item.comment}
                  </div>
                ))}                
                <button className={styles.button} onClick={openModal}>Show all reviews</button>
              </div>
            </div>
          ))}
        </div>
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
}, "1000");
}
  

export default Reviews;
