const fetchMe = () => {
    let userCity = document.getElementById('searchInput').value
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=705303948810324980db093f63a51039&units=metric`
    if (userCity != "") {
        fetch(endpoint).then((response) => {
            response.json().then(data => {
                data.name = userCity
                city.innerHTML =`${data.name}`
                  description.innerHTML =`${data.weather[0].description}`
                  humidity.innerHTML =`${data.main.humidity}%`
                  wind.innerHTML =`${data.wind.speed}m/s`
                  minTemp.innerHTML =`${data.main.temp_min}℃`
                  maxTemp.innerHTML =`${data.main.temp_max}℃`
                  pressure.innerHTML =`${data.main.pressure}hPa`
                  feels.innerHTML =`${data.main.feels_like}℃`
                  temp.innerHTML =`${Math.round(data.main.temp)}℃`
                  myCity.innerHTML=`${data.name}, ${data.sys.country}`
                  description2.innerHTML =`${data.weather[0].description}`
                  console.log(data.name);
            } )
          })
        
    }else {
        alert("Enter your city")
    }
}

const currentCity = () => {
    navigator.geolocation.getCurrentPosition((cityData) => {
        console.log(cityData);
        let lat = cityData.coords.latitude
        let lon = cityData.coords.longitude
        let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f8e4038bd05b258eea9e2417126bb07f&units=metric`
        fetch(endpoint).then((response) => {
            response.json().then(data => {
                console.log(data);
                currentCityName.innerHTML = `${data.name}  , ${data.sys.country}`;
                currentCityDescription.innerHTML = `${data.weather[0].description}`
                currentCityTemperature.innerHTML = `${data.main.temp}℃`
                currentCityWind.innerHTML = `${data.wind.speed} m/s`
            })
        })
    })
    

}