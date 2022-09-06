import React, { useState } from "react";
import styles from "../styles/Description.module.css";
import Amenities from "./Amenities";
import AmenitiesModal from "./AmenitiesModal";
import AboutModal from "./AboutModal";

const Description = ({ property, host }) => {
  const [showDModal, setShowDModal] = useState(false);
  const [showAModal, setShowAModal] = useState(false);

  const openDModal = () => {
    setShowDModal((prev) => !prev);
  };

  const openAModal = () => {
    setShowAModal((prev) => !prev);
  };

  return (
    <div className={styles.Description}>
      <h2 id="property-title">
        {property.title} hosted by {host[0].name_firstlast || "one of our most trusted hosts"}
      </h2>
      <p id="property-specs">{property.specs}</p>
      <div className={styles.propDesc}>
        <p id="about">{property.about}</p>
        <h3>The space</h3>
        <p id="space">{property.prop_space}</p>
        <h3>Guest access</h3>
        <p id="guest-access">{property.guest}</p>
        <h3>Other things to note</h3>
        <p id="other">{property.other}</p>
        <u className={styles.link} onClick={openAModal}>
          Show more
        </u>
        <AboutModal
          showDModal={showDModal}
          setShowDModal={setShowAModal}
          property={property}
          onClose={() => {
            setShowAModal(false);
          }}
        />
      </div>
      <div id="amenities">
        <h2>What this place offers</h2>
        {property.amenities.ameniGroups.map((group, i) => (
          <div classname="ameniGroup" key={i}>
            <h3>{group.title}</h3>
            <Amenities amenities={property.amenities.ameniGroups[i].values} />
          </div>
        ))}
        <button className={styles.button} onClick={openDModal}>
          Show All Amenities
        </button>
        <AmenitiesModal
          showDModal={showDModal}
          setShowDModal={setShowDModal}
          amenities={property.amenities.ameniGroups}
          onClose={() => {
            setShowDModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default Description;
