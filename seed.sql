DROP TABLE IF EXISTS property;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS comments;

CREATE TABLE property (
    prop_id SERIAL PRIMARY KEY,
    number_street TEXT,
    US_state TEXT,
    zip NUMBER
);
CREATE TABLE customer (
    cust_id SERIAL PRIMARY KEY,
    name_firstlast TEXT,
);

CREATE TABLE reservation (
    CONSTRAINT prop_id FOREIGN KEY(prop_id) REFERENCES property(prop_id), 
    CONSTRAINT cust_id FOREIGN KEY(cust_id) REFERENCES customer(cust_id),
    res_date number
);

CREATE TABLE comments (
    CONSTRAINT prop_id FOREIGN KEY(prop_id) REFERENCES property(prop_id), 
    CONSTRAINT cust_id FOREIGN KEY(cust_id) REFERENCES customer(cust_id),
    stars NUMBER,
    comment TEXT
);

INSERT INTO property (number_street, US_state, zip) VALUES ('1313 mockingbird lane','VA','22306');
INSERT INTO customer (name_firstlast) VALUES ('Jane Doe');
INSERT INTO reservation (res_date) VALUES ('20221231');
INSERT INTO comments (stars, comment) VALUES ('5','This place is great!');
