import React, { useEffect } from "react";

const Description = ({ property, handleProperty }) => {
  return (
    <div className="description">
      <button onClick={handleProperty}>Test fetch</button>
      <h3 id="property-title">
        {property.title} hosted by {property.host || "one of our most trusted hosts"}
      </h3>
      <p id="property-specs">{property.specs}</p>
      <div id="property-description">
        <h2>About this space</h2>
        <p id="about">{property.about}</p>
        <h3>The space</h3>
        <p id="space">{property.prop_space}</p>
        <h3>Guest access</h3>
        <p id="guest-access">{property.guest}</p>
        <h3>Other things to note</h3>
        <p id="other">{property.other}</p>
      </div>
      <div id="amenities">
        <h2>What this place offers</h2>
        {property.amenities.ameniGroups.map((group) => (
          <>
            <h3>{group.title}</h3>
            {group.values.map((value) => (
              <ul>
                <li>{value}</li>
              </ul>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Description;
