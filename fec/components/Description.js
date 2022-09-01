import React, { useEffect } from "react";

const Description = ({ property, handleProperty }) => {
  const amenitiesList = {
    "Scenic Views": ["Mountain view", "Ocean View"],
    Bathroom: [
      "bathtub",
      "Hair dryer",
      "Cleaning products",
      "Shampoo",
      "Conditioner",
      "Body soap",
      "Bidet",
      "Hot water",
      "Shower gel",
    ],
    "Bedroom and Laundry": [
      "Free washer, In unit",
      "Free dryer, In unit",
      "Essentials",
      "Towels, bed sheets, soap, and toilet paper",
      "Hangers",
      "Bed linens",
      "Extra pillows and blankets",
      "Iron",
      "Clothing storage",
    ],
    Entertainment: ["TV"],
    "Heating and Cooling": [
      "Window AC unit",
      "Indoor fireplace",
      "Ceiling fan",
      "Portable fans",
      "Central heating",
    ],
    "Home Safety": [
      "Doorbell camera",
      "Smoke alarm",
      "Carbon monoxide alarm",
      "Fire extinguisher",
      "First aid kit",
    ],
    "Internet and Office": ["Wifi", "Dedicated workspace"],
    "Kitchen and Dining": [
      "Kitchen",
      "Refrigerator",
      "Cooking basics",
      "Dishes and silverware",
      "Freezer",
      "Dishwasher",
      "Stove",
      "Oven",
      "Hot water kettle",
      "Coffee maker",
      "Wine glasses",
      "Toaster",
      "Baking sheet",
      "Dining table",
    ],
    "Location Features": ["Laundromat nearby"],
    Outdoor: [
      "Shared patio or balcony",
      "Private backyard, fully fenced",
      "Fire pit",
      "Outdoor furniture",
      "Outdoor dining area",
    ],
    "Parking and Facilities": ["Free parking on premises", "Free street parking", "Single level home"],
    Services: ["Breakfast", "Self check-in", "Lockbox"],
  };

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
        {/* <ul id="amenity-list">
          {property.amenities.map((amenity) => (
            <li key={amenity.key}>{amenity}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Description;
