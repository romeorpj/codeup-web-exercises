"use strict"
let input1 = document.querySelector("#input1");
let btn1 = document.querySelector(".header-btn1")
//global map for access by input1 event
let map;

function setupMap(center){
mapboxgl.accessToken = MAPBOX_KEY;
map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    // center coords are pulled from wather-map geolocation
    center: center, // starting position [lng, lat]
    zoom: 16, // starting zoom
trackResize: true,
})
// Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(),'bottom-right');
}
//TODO: GEOCODING
btn1.addEventListener("click",(e)=>{
    // let geoSearch = e.target.value;





   let geoSearch = input1.value;
    geocode(geoSearch, MAPBOX_KEY).then(function(result) {
        console.log(`this geosearch: ${geoSearch}`);

        map.setCenter(result);
        map.setZoom(16);
        getMapboxWeather(result).then(mapWeatherData => {
            weatherArrSwitcher = mapWeatherData;
            outputOWM(weatherArrSwitcher);
            console.log(result);
            // console.log(weatherArrSwitcher.daily)
            //  console.log(weatherArrSwitcher.daily[1].weather[0].icon)
        }).catch(error => {
            console.log(`This is probably somewhat kind of maybe not a good thing: ${error}`)
        })
    })
});

// TODO: getWeatherData calls the openweather API
async function getMapboxWeather(result) {
    let [mapLong, mapLat] = result;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${mapLat}&lon=${mapLong}&&units=imperial&exclude=current,hourly,minutely&appid=${OWM_KEY}`)
    if (!response.ok) {
        new Error(`HTTP error! status: ${response.status}`)
    } else {
        return await response.json();
    }
}