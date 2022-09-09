import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Map(props) {
    //SET UP VARIABLES
    let coordinates = {};
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    let address = "";
    const googlemap = useRef(null);

    if (props.location.prop_id === -1) {
        //DO NOTHING IF PROPERTY'S INFORMATION HASN'T LOADED
    } else {
        address = encodeURIComponent(props.location.number_street + ', ' + props.location.us_state + " " + props.location.zip);
        axios({
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
            responseType: 'json'
        })
            .then((response) => {
                return response.data.results[0]['geometry']['location']
            })
            .then((locData) => {
                coordinates = locData;
            })
            .then(() => {
                renderMap(coordinates, apiKey, googlemap);
            }).catch((err) => {
                console.err(err);
            });

    }

    return (
        <div id="map" ref={googlemap} />
    )
};

const style = [
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#f8f4f1",
            },
        ],
    },
    {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "landscape.natural.landcover",
        elementType: "geometry",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "landscape.natural.terrain",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.medical",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fdfdfd",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fffefa",
            },
            {
                weight: 0.5,
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.highway",
        stylers: [
            {
                color: "#fffefa",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "simplified",
            },
            {
                weight: 1.5,
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.local",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
            {
                weight: 2,
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "on",
            },
            {
                weight: 0.5,
            },
        ],
    },
    {
        featureType: "transit",
        stylers: [
            {
                visibility: "simplified",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#b0e3f1",
            },
        ],
    },
];

async function renderMap(coordinates, apiKey, googlemap) {
    const loader = new Loader({
        apiKey,
        version: "weekly",
    });
    let locData = coordinates;
    let map;

    loader
        .load()
        .then(() => {
            const google = window.google;
            map = new google.maps.Map(googlemap.current, {
                center: locData, //look this up
                zoom: 15,
                styles: style,
                disableDefaultUI: true,
            });
            // const marker = new google.maps.Marker({
            //     position: locData,
            //     map,
            //     label: `Your AirBnB is Here`,
            // })
            setMarkers(map, locData);

            return locData;
        })
        .catch((err) => {
            console.log(err);
        });
    return locData;
}

function setMarkers(map, locData) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    const image = {
        //Pulled the below url from their website:
        url: 'https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png',
        //url: "https://css.gg/home-alt.svg",
        //url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(200, 200),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 0),
    };

    const svgMarker = {
        path: "M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z",
        fillColor: "white",
        lineColor: "red",
        fillOpacity: 80,
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeWeight: 2,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
    };


    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };

    new google.maps.Marker({
        position: locData,
        map,
        icon: image,
        shape: shape,
        label: `Exact location provided afrer booking`,
    });
}

// import { useEffect, useRef } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { Loader } from "@googlemaps/js-api-loader";

// const Map = (props) => {
//   const googlemap = useRef(null);
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   const lat = props.property.locData.lat;
//   const long = props.property.locData.lng;
//   //Will need to get location lat long props

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: apiKey,
//       version: "weekly",
//     });
//     let map;
//     loader.load().then(() => {
//       const google = window.google;
//       map = new google.maps.Map(googlemap.current, {
//         center: { lat: lat, lng: long },
//         zoom: 15,
//       });
//     });
//   });

//   return <div id="map" ref={googlemap} />;
// };

// export default Map;
