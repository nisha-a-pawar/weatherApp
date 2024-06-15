const inputLatitude = document.getElementById('latitude').value;
const inputLongitude = document.getElementById('longitude').value;
const btnSubmit = document.getElementById('btn-submit');
const longitude = document.getElementById('longitude-display');
const latitude = document.getElementById('latitude-display');
const temparature = document.getElementById('temperature');
const time = document.getElementById('time');
const rain = document.getElementById('rain');
const isDay = document.getElementById('isDay');
const displayWeather = document.getElementsByClassName('card-body');
// async =>part that needs some time to execute
// await =>tells that you have to wait till async part completes execution
// we can achieve same results as asynch and await through .then() chaining but it does not aloow us to write it in a function

let timeValue ="";
let temparatureValue="";
let windSpeedValue="";
const getWheatherData = async function () {
    let weatherData = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m");
    let response = await weatherData.json();
    // weatherData.json() unlocks the body:ReadableStream and hence the data is visible to us
    console.log(response);
    timeValue=response.current.time;
    temparatureValue=response.current.temperature_2m;
    windSpeedValue=response.current.wind_speed_10m;
    
    // latitude.innerHTML = `Latitude:${inputLatitude}`;
    // longitude.innerHTML = `Longitude:${inputLongitude}`;
    // console.log(timeValue,temparatureValue,windSpeedValue);
    return[timeValue,temparatureValue,windSpeedValue];
}


async function render(){
    const dataArray = await getWheatherData();
    console.log(dataArray);
}

render();