"use strict"
let input1 = document.querySelector("#input1");
let btn1 = document.querySelector(".header-btn1");
let mapStuffSection = document.querySelector("#map-stuff");
let reverseCloseBtn = document.querySelector(".fa-circle-xmark");
let reverseGeoWrapper1 = document.querySelector(".reverseGeoWrapper");
let marker= new mapboxgl.Marker();
// console.log(body)
//global map for access by input1 event
let map;


function setupMap(center){
//    this function sets the starting details of the map
mapboxgl.accessToken = MAPBOX_KEY;
map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    // center coords are pulled from wather-map geolocation
    center: center, // starting position [lng, lat]
    zoom: 16, // starting zoom
trackResize: true,
})
// Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(),'bottom-right');

    // markerInfo = {
    //     address: "",
    //     popupHTML: "<p>Remember the Alamo!</p>"
    // };


    // console.log()
    // placeMarkerAndPopup(markerInfo, MAPBOX_KEY, map);

// ***TODO: REVERSE GEOCODING
    //Reverse Gecode onCLICK
// language=HTML
    map.on('click', (e) => {
        let coordinates = {lng:e.lngLat.lng, lat:e.lngLat.lat}
        reverseGeocode(coordinates, MAPBOX_KEY).then((results)=>{
            // reverseGeoWrapper1.append(`${results}`);


            getMapboxWeather(coordinates.lat, coordinates.lng).then(mapWeatherData => {
                outputMapboxWeather(mapWeatherData)
            }).catch(error => {
                console.log(`This is probably somewhat kind of maybe not a good thing: ${error}`)
            })
placeMarkerAndPopup(results, MAPBOX_KEY, map);
            console.log(`this is results reverse ${results}`)
        })
        // console.log(e)
        // console.log(e.lngLat.lng)
        // console.log(`A click event has occurred at ${e.lngLat}`);
    });
}
//END MAP OBJECT
//TODO: MARKERS & POPUP
function placeMarkerAndPopup(info, token, map) {
    geocode(info, token).then(function(coordinates) {
        let popup = new mapboxgl.Popup()
            .setHTML(`<h2>reverse search results:</h2>
${info}`);
        marker
            .setLngLat(coordinates);
            marker.addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}
//TODO: GEOCODING
btn1.addEventListener("click",(e)=>{
let geoSearch = input1.value;

    geocode(geoSearch, MAPBOX_KEY).then(function(result) {
        map.setCenter(result);
        map.setZoom(16);
        getMapboxWeather(result).then(mapWeatherData => {
        outputMapboxWeather(mapWeatherData)
        }).catch(error => {
            console.log(`This is probably somewhat kind of maybe not a good thing: ${error}`)
        })
    })
    input1.value = "";
});

// TODO: getWeatherData calls the openweather API *** TO UPDATE THE FORWARD GEOCODE WEATHER
async function getMapboxWeather(lat, long){


    // let [mapLong, mapLat] = result;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&&units=imperial&exclude=current,hourly,minutely&appid=${OWM_KEY}`)
    if (!response.ok) {
        new Error(`HTTP error! status: ${response.status}`)
    } else {
        return await response.json();
    }
}


function outputMapboxWeather(mapWeatherData){
    forecastScroller.innerHTML = "";
    for(let i = 0; i <= 6; i++) {

        forecastScroller.innerHTML +=  `
         <div class="forecast flex-col">
          <div class="date-container flex-row">
              <img src="http://openweathermap.org/img/wn/${mapWeatherData.daily[i].weather[0].icon}@2x.png" class="owm-icon">
       <p class="forecast-day">
           ${new Date(mapWeatherData.daily[i].dt * 1000).toLocaleString('en-us', {weekday: 'short'})}
           </p>
       </div>
       <div class="forecast-hilo flex-row">
           <p class="forecast-lo">Lo: ${mapWeatherData.daily[i].temp.min} /</p>
           <p class="forecast-hi">Hi: ${mapWeatherData.daily[i].temp.max}</p>
       </div>
       <div class="description-wrapper flex-col">
           <p class="description-title">Description:</p>
           <p class="description-output">${mapWeatherData.daily[i].weather[0].description}</p>
       </div>
       <div class="humidity-wrapper flex-row">
           <p class="humidity-title">Humidity:</p>
           <p class="humidity-output">${mapWeatherData.daily[i].humidity}</p>
       </div>
       <div class="wind-speed-wrapper flex-row">
           <p class="wind-speed-title">Wind Speed:</p>
           <p class="wind-speed-output">${mapWeatherData.daily[i].wind_speed}</p>
       </div>
         </div>
     `
    }
}
