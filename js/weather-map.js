"use strict"
const headerBtn1 = document.querySelector(".header-btn1");


// TODO: getWeatherData calls the openweather API
async function getWeatherData(lat, long) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&&units=imperial&exclude=current,hourly,minutely&appid=${OWM_KEY}`)
    if (!response.ok) {
        new Error(`HTTP error! status: ${response.status}`)
    } else {
        return await response.json();
    }
}

// TODO: Get geolocation information AUTOMATICALLY : SUCCESSCALLBACK | ERRORCALLBACK
function successCallback(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    //TODO: Pass coordinates into the getWeatherData function API
    getWeatherData(lat, long)
        .then(dataArr => {
           outputOWM(dataArr);
            console.log(dataArr.daily)
           //  console.log(dataArr.daily[1].weather[0].icon)
        }).catch(error => {
        console.log(`This is probably somewhat kind of maybe not a good thing: ${error}`)
    });
}

const errorCallback = (e) => {
    //fires if getCoordinates is rejected
    throw new Error(`Coordinates not found: ${e}`);
};
//TODO: outputOWM provides the content for the returned promise inside of the successcallback function
// language=HTML
function outputOWM(dataArr){

    let forecastScroller = document.querySelector(".forecast-scroller")
    // let forecast = document.querySelector(".forecast")
    for(let i = 0; i <= 6; i++) {
        // console.log(dataArr[i])
     forecastScroller.innerHTML += `
         <div class="forecast flex-col">
          <div class="date-container flex-row">
              <img src="http://openweathermap.org/img/wn/${dataArr.daily[i].weather[0].icon}@2x.png" class="owm-icon">
       
       <p class="forecast-day">
           ${new Date(dataArr.daily[i].dt).toLocaleString('en-us', {weekday: 'short'})}
           </p>
       </div>
       <div class="forecast-hilo flex-row">
           <p class="forecast-lo">Lo: ${dataArr.daily[i].temp.min}</p>
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
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy: true,});
}

//TODO: click button to return openweather map data inside of the successcallback function
headerBtn1.addEventListener("click",()=>{
    //runs the GeoLocation API
    getCoordinates()

})

