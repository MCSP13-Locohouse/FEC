import React, { useState } from "react";
import styles from "../styles/AmenitiesModal.module.css";
import Amenities from "./Amenities";

const AmenitiesModal = ({ showDModal, setShowDModal, onClose, amenities }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {showDModal ? (
        <>
          <div className={styles.AmenitiesModal} />

          <div className="amenitiesModalStyle">
            <div className="amenitiesHeader">
              Amenities
              <button onClick={onClose}>X</button>
            </div>
            <div className="amenitiesModalList">
              {amenities.ameniGroups.map((group, i) => (
                <div classname="ameniGroup" key={i}>
                  <h3>{group.title}</h3>
                  <Amenities amenities={amenities.ameniGroups[i].values} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AmenitiesModal;
