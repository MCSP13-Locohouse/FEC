import React from "react";

const Description = ({ property }) => {
  return (
    <div className="description">
      <h3 id="property-title">
        {property.title} hosted by {property.host}
      </h3>
      <p id="property-specs">{property.specs}</p>
      <div id="property-description">
        <h2>About this space</h2>
        <p id="about">{property.about}</p>
        <h3>The space</h3>
        <p id="space">{property.space}</p>
        <h3>Guest access</h3>
        <p id="guest-access">{property.guest}</p>
        <h3>Other things to note</h3>
        <p id="other">{property.other}</p>
      </div>
      <div id="amenities">
        <h2>What this place offers</h2>
        <ul id="amenity-list">
          {property.amenities.map((amenity) => (
            <li key={amenity.key}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
