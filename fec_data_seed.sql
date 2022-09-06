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
    us_state TEXT,
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

INSERT INTO properties (title, price, specs, about, prop_space, guest, other, number_street, us_state, zip, amenities) VALUES ('Sunset Palace', '150', 'lots of specs here', 'Not much about here', '8,000 sqft', 'Enter through the servant cottage', 'no other here','1313 mockingbird lane','VA','22306', 
  '{"ameniGroups":
    [
      {"title": "Scenic Views", "values": ["Mountain view", "Ocean View"]}, 
      {"title": "Bathroom", "values": ["bathtub", "Hair dryer", "Cleaning products", "Shampoo", "Conditioner", "Body soap", "Bidet", "Hot water", "Shower gel"]},
      {"title": "Bedroom and Laundry", "values": ["Free washer, In unit","Free dryer, In unit","Essentials: Towels, bed sheets, soap, and toilet paper", "Hangers", "Bed linens", "Extra pillows and blankets", "Iron", "Clothing storage"]},
      {"title": "Entertainment", "values": ["TV"]},
      {"title": "Heating and Cooling", "values": ["Window AC unit", "Indoor fireplace", "Ceiling fan", "Portable fans", "Central heating"]},
      {"title": "Home Safety", "values": ["Doorbell camera", "Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit"]},
      {"title": "Internet and Office", "values": ["Wifi", "Dedicated workspace"]},
      {"title": "Kitchen and Dining", "values": ["Kitchen", "Refrigerator", "Cooking basics", "Dishes and silverware", "Freezer", "Dishwasher", "Stove", "Oven", "Hot water kettle", "Coffee maker", "Wine glasses", "Toaster", "Baking sheet", "Dining table"]},
      {"title": "Location Features", "values": ["Laundromat nearby"]},
      {"title": "Outdoor", "values": ["Shared patio or balcony", "Private backyard, fully fenced", "Fire pit", "Outdoor furniture", "Outdoor dining area"]},
      {"title": "Parking and Facilities", "values": ["Free parking on premises", "Free street parking", "Single level home"]},
      {"title": "Services", "values": ["Breakfast", "Self check-in", "Lockbox"]}
    ]
  }');
INSERT INTO customers (name_firstlast) VALUES ('Jane Doe');
INSERT INTO reservations (prop_id, first_name, last_name, guest_num, res_date) VALUES ('1', 'Bob', 'Testor', '3','20221231');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Erin', 'Smith', '1', '5','This place is great!');
