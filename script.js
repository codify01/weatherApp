let endpoint = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=705303948810324980db093f63a51039&units=metric"
const fetchMe = () => {
    fetch(endpoint).then((response) => {
    response.json().then(data => {
          
    } )
  })

}