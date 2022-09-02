import React from "react";

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

const testMap = () => {

    return (
        <div>
            <h3>My Google Maps Demo</h3>
            <div id="map"></div>

            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBh2f-Z7UY4_KKSNdxZf0feK5Z3nf8d1So&callback=initMap&v=weekly"
                defer
            ></script>
        </div>
    )
}


export default testMap;
