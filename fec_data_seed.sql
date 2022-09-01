DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS comments;

CREATE TABLE customers (
    cust_id SERIAL PRIMARY KEY NOT NULL,
    name_firstlast TEXT
);

CREATE TABLE properties (
    prop_id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    price TEXT,
    specs TEXT,
    about TEXT,
    prop_space TEXT,
    guest TEXT,
    other TEXT,
    number_street TEXT,
    US_state TEXT,
    zip TEXT,
    amenities JSON NOT NULL
);


CREATE TABLE reservations (
    prop_id INT,
    first_name TEXT,
    last_name TEXT,
    guest_num INT,
    res_date INT
);

CREATE TABLE comments (
    first_name TEXT,
    last_name TEXT,
    prop_id INT,
    stars TEXT,
    comment TEXT
);

INSERT INTO properties (title, price, specs, about, prop_space, guest, other, number_street, US_state, zip, amenities) VALUES ('Sunset Palace', '150', 'lots of specs here', 'Not much about here', '8,000 sqft', 'Enter through the servant cottage', 'no other here','1313 mockingbird lane','VA','22306', '{
    "Scenic Views": ["Mountain view", "Ocean View"],
    "Bathroom": [
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
    "Entertainment": ["TV"],
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
    "Outdoor": [
      "Shared patio or balcony",
      "Private backyard, fully fenced",
      "Fire pit",
      "Outdoor furniture",
      "Outdoor dining area",
    ],
    "Parking and Facilities": ["Free parking on premises", "Free street parking", "Single level home"],
    "Services": ["Breakfast", "Self check-in", "Lockbox"],
  }');
INSERT INTO customers (name_firstlast) VALUES ('Jane Doe');
INSERT INTO reservations (prop_id, first_name, last_name, guest_num, res_date) VALUES ('1', 'Bob', 'Testor', '3','20221231');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Erin', 'Smith', '1', '5','This place is great!');
