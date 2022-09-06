import { useEffect, useRef } from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Loader } from "@googlemaps/js-api-loader"


const Map = (props) => {
    const googlemap = useRef(null)
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const lat = props.property.locData.lat;
    const long = props.property.locData.lng;
    //Will need to get location lat long props 

    useEffect(() => {
        const loader = new Loader({
            apiKey: apiKey,
            version: "weekly",
        });
        let map;
        loader
            .load()
            .then(() => {
                const google = window.google;
                map = new google.maps.Map(googlemap.current, {
                    center: { lat: lat, lng: long },
                    zoom: 15,
                })
            })

    });

    return (
        <div id="map" ref={googlemap} />
    );
}



export default Map;
