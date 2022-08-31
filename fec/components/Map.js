import React from "react";

import {
    StaticGoogleMap,
    Marker,
    Path,
} from 'react-static-google-map';


const Map = ({ property }) => {
    return (
        <div className="description">
            <StaticGoogleMap size="300x300" className="img-fluid" apiKey="AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1So">
                {console.log('map.js', process)}
                <Marker location="6.4488387,3.5496361" color="blue" label="P" />
            </StaticGoogleMap>

            <StaticGoogleMap size="300x300" apiKey="AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1So">
                <Marker.Group label="T" color="brown">
                    <Marker location="40.737102,-73.990318" />
                    <Marker location="40.749825,-73.987963" />
                </Marker.Group>
            </StaticGoogleMap>

            <StaticGoogleMap size="300x300" apiKey="AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1So">
                <Marker
                    location={{ lat: 40.737102, lng: -73.990318 }}
                    color="blue"
                    label="P"
                />
                <Path
                    points={[
                        '40.737102,-73.990318',
                        '40.749825,-73.987963',
                        '40.752946,-73.987384',
                        '40.755823,-73.986397',
                    ]}
                />
            </StaticGoogleMap>
        </div>
    );
};

export default Map;
