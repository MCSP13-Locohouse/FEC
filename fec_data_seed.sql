DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS comments;

CREATE TABLE customers (
    cust_id SERIAL PRIMARY KEY,
    name_firstlast TEXT
);

CREATE TABLE properties (
    prop_id SERIAL PRIMARY KEY,
    title TEXT,
    cust_id INT,
    price TEXT,
    specs TEXT,
    about TEXT,
    prop_space TEXT,
    guest TEXT,
    other TEXT,
    number_street TEXT,
    US_state TEXT,
    zip TEXT,
CONSTRAINT FK_properties_customers FOREIGN KEY(cust_id)
        REFERENCES customers(cust_id)
);


CREATE TABLE reservations (
    prop_id INT,
    cust_id INT,
    res_date TEXT,
CONSTRAINT FK_reservations_customers FOREIGN KEY(cust_id)
        REFERENCES customers(cust_id),
CONSTRAINT FK_reservations_properties FOREIGN KEY(prop_id)
        REFERENCES properties(prop_id)
);

CREATE TABLE comments (
    prop_id INT, 
    cust_id INT,
    stars TEXT,
    comment TEXT,
CONSTRAINT FK_comments_customers FOREIGN KEY(cust_id)
        REFERENCES customers(cust_id),
CONSTRAINT FK_comments_properties FOREIGN KEY(prop_id)
        REFERENCES properties(prop_id)
);

INSERT INTO properties (title, price, specs, about, prop_space, guest, other, number_street, US_state, zip) VALUES ('Sunset Palace', '150', 'lots of specs here', 'Not much about here', '8,000 sqft', 'Enter through the servant cottage', 'no other here','1313 mockingbird lane','VA','22306');
INSERT INTO customers (name_firstlast) VALUES ('Jane Doe');
INSERT INTO reservations (res_date) VALUES ('20221231');
INSERT INTO comments (stars, comment) VALUES ('5','This place is great!');
