"use strict"
// ***GLOBAL VARIABLES***
// const headerBtn1 = document.querySelector(".header-btn1");
let center;
let lat;
let long;
// let weatherArrSwitcher;
let forecastScroller = document.querySelector(".forecast-scroller")
// ***FUNCTION CALLS***

// ***FUNCTION DEFINITIONS***
// TODO: getWeatherData calls the openweather API
async function getWeatherData(lat, long) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&&units=imperial&exclude=current,hourly,minutely&appid=${OWM_KEY}`)
    if (!response.ok) {
        new Error(`HTTP error! status: ${response.status}`)
    } else {
        return await response.json();
    }
}

// TODO: Get geolocation information AUTOMATICALLY : SUCCESSLOCATION | ERRORCALLBACK
function successLocation(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    //TODO: Pass coordinates into the getWeatherData function API
    //TODO: Also pass coordinates into the setup map function in mapbox-weather.js
    setupMap([long,lat]);
    getWeatherData(lat, long)
        .then((dataArr) => {

            outputOWM(dataArr)
            console.log(dataArr)
            //  console.log(weatherArrSwitcher.daily[1].weather[0].icon)
        }).catch(error => {
        console.log(`This is probably somewhat kind of maybe not a good thing: ${error}`)
    });
}

const errorCallback = (e) => {
    //fires if getCoordinates is rejected
    console.log(new Error(`Coordinates not found: ${e}`));
};

//TODO: outputOWM provides the content for the returned promise inside of the successcallback function

// language=HTML
function outputOWM(dataArr) {
// if(forecastScroller){
//     forecastScroller.innerhtml="";
// }else{
    console.log(`this is weatherArrSwitcher html call ${dataArr.daily[0]}`)


    for (let i = 0; i <= 6; i++) {
        forecastScroller.innerHTML += `
            <div class="forecast flex-col">
                <div class="date-container flex-row">
                    <img src="http://openweathermap.org/img/wn/${dataArr.daily[i].weather[0].icon}@2x.png"
                         class="owm-icon">
                    <p class="forecast-day">
                        ${new Date(dataArr.daily[i].dt).toLocaleString('en-us', {weekday: 'short'})}
                    </p>
                </div>
                <div class="forecast-hilo flex-row">
                    <p class="forecast-lo">Lo: ${dataArr.daily[i].temp.min} /</p>
                    <p class="forecast-hi">Hi: ${dataArr.daily[i].temp.max}</p>
                </div>
                <div class="description-wrapper flex-col">
                    <p class="description-title">Description:</p>
                    <p class="description-output">${dataArr.daily[i].weather[0].description}</p>
                </div>
                <div class="humidity-wrapper flex-row">
                    <p class="humidity-title">Humidity:</p>
                    <p class="humidity-output">${dataArr.daily[i].humidity}</p>
                </div>
                <div class="wind-speed-wrapper flex-row">
                    <p class="wind-speed-title">Wind Speed:</p>
                    <p class="wind-speed-output">${dataArr.daily[i].wind_speed}</p>
                </div>
            </div>
        `
    }

}

function getCoordinates(){
    navigator.geolocation.getCurrentPosition(successLocation, errorCallback, {enableHighAccuracy: true,});
}
getCoordinates()

// ***EVENT LISTENERS***
//TODO: click button to return openweather map data inside of the successcallback function
// headerBtn1.addEventListener("click",()=>{
//     //runs the GeoLocation API
//
//
// })

