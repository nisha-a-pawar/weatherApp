const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const btnSubmit = document.getElementById('btn-submit');
const longitude = document.getElementById('longitude-display');
const latitude = document.getElementById('latitude-display');
const temparature = document.getElementById('temperature');
// const windspeed=document.getElementById('windspeed');
const time = document.getElementById('time');
// const rain = document.getElementById('rain');
const isDay = document.getElementById('isDay');
const displayWeather = document.getElementsByClassName('card-body');
// async =>part that needs some time to execute
// await =>tells that you have to wait till async part completes execution
// we can achieve same results as asynch and await through .then() chaining but it does not aloow us to write it in a function


 

const getWeatherData = async function (latitude,longitude){
    let weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain`)
    let response = await weatherData.json();
    console.log(JSON.stringify(response));
    return response
}

async function revealEverything(){

    const response = await getWeatherData(latitudeInput.value,longitudeInput.value)
    console.log(response.longitude,response.latitude,response.current.time,response.current.temperature_2m,response.current.rain,response.current.is_day)
    longitude.innerText = `Longitude: ${response.longitude}`;
    latitude.innerText = `Latitude: ${response.latitude}`;
    time.innerText=`Time:${response.current.time}`;
    temperature.innerText = `${response.current.temperature_2m}`;
    // windspeed.innerText = `${response.current.wind_speed_10m}`;
    // rain.innerText = `Rain: ${response.current.rain}`;
    isDay.innerText = `Is Day: ${response.current.is_day}`;
    // displayWeather.classList.remove('d-none');
    // displayWeather.classList.add('display');
     
    if (Number(isDay.innerText) === 1) {
        document.body.style.backgroundImage = `url("day.jpg")`;
    } else if (Number(isDay.innerText) === 0) {
        document.body.style.backgroundImage = `url("night.jpg")`;
    } else {
        document.body.style.backgroundColor = '#272727';
    }

}

btnSubmit.addEventListener('click',revealEverything)
