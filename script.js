const fetchMe = () => {
    let userCity = document.getElementById('searchInput').value
    let endpoint = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=705303948810324980db093f63a51039&units=metric"
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