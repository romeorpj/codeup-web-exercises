"use strict"
// ***GLOBAL VARIABLES***

// ***FUNCTION CALLS***

// ***FUNCTION DEFINITIONS***
function setupMap(center){
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    // center: [long, lat], // starting position [lng, lat]
    center: center, // starting position [lng, lat]
    zoom: 12, // starting zoom
trackResize: true
})
// Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(),'bottom-right');
}



// // the  geocode method from mapbox-geocoder-utils.js
// geocode("600 Navarro St #350, San Antonio, TX 78205", MAPBOX_KEY).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(18);
// });