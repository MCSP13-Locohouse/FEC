import react, { useState } from "react";
import styles from "../styles/ReviewModal.module.css";

const ReviewModal = ({ showModal, setShowModal, onClose, users, reviews }) => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  let averageRating = 0;

  const reviewAverage = () => {
    for (let i = 0; i < reviews.length; i++) {
      const starNumbers = parseInt(reviews[i].stars);
      averageRating += starNumbers;
    }
    averageRating = averageRating / reviews.length;
    return averageRating;
  };

  reviewAverage();

  const searchFunc = (event) => {
    // if (event.key === "Enter") {
    let lowerCase = event.target.value.toLowerCase();
    setInput({ input: lowerCase });
    // }
  };
  let matching = [];
  const testCommentSearch = () => {
    reviews.forEach((element) => {
      const isMatching =
        element.comment.toLowerCase().includes(input.input) ||
        element.first_name.toLowerCase().includes(input.input) ||
        element.last_name.toLowerCase().includes(input.input);
      if (isMatching) {
        matching.push(element);
      }
    });
  };

  testCommentSearch();

  return (
    <>
      {showModal ? (
        <>
          <div className={styles.modalOverlay} onClick={onClose} />

          <div className={styles.reviewModal}>
            <div className={styles.header}>
              {/* header div start point */}
              <input
                className={styles.search}
                placeholder="Search reviews"
                id="searchBar"
                // onKeyDown={(e) => {
                //   searchFunc(e);
                // }}
                onChange={(e) => {
                  searchFunc(e);
                }}
              ></input>
              <button onClick={onClose} className={styles.button}>
                X
              </button>
            </div>
            {/* header div end point */}
            <div className={styles.ratings}>
              Overall Reviews Rating: {averageRating} Stars!
            </div>
            <div id="hide" className={styles.comments}>
              {matching.length <= 0
                ? reviews.map((item, i) => (
                    <>
                      <ul id="myList" key={i} className="commentList">
                        <li key={i}>
                          <b className={styles.bullet}>
                            {item.first_name} {item.last_name}
                          </b>
                        </li>
                      </ul>
                      <div className={styles.paragraph} key={i}>
                        {item.stars} Stars! {item.comment}
                      </div>
                    </>
                  ))
                : matching.map((item, i) => (
                    <>
                      <ul id="myList" key={i} className="commentList">
                        <li key={i}>
                          <b className={styles.bullet}>
                            {item.first_name} {item.last_name}
                          </b>
                        </li>
                      </ul>
                      <div key={i} className={styles.paragraph}>
                        {item.stars} Stars! {item.comment}
                      </div>
                    </>
                  ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReviewModal;
