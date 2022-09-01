import { useEffect, useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Loader } from "@googlemaps/js-api-loader"
import {
    StaticGoogleMap,
    Marker,
    Path,
} from 'react-static-google-map';



const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return <div>LOADING!</div>;
        case Status.FAILURE:
            return <div>FAILURE!</div>;
        case Status.SUCCESS:
            return <oldMap />;
    }
};

const Map = (props) => {
    const googlemap = useRef(null)

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    console.log('map.js apikey: ', apiKey);
    console.log("getting address");
    console.log(props.property);
    //insert api call here




    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1So",
            version: "weekly",
        });
        let map;
        loader
            .load()
            .then(() => {
                const google = window.google;
                map = new google.maps.Map(googlemap.current, {
                    center: { lat: -30.397, lng: 150.644 },
                    zoom: 8,
                })
            })
        console.log('map.js useEffect');

    });

    return (
        <div id="map" ref={googlemap} />
    );
}





const oldMap = ({ property }) => {


    return (
        <div className="map">
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
