const apikey = '76768552ea55026b14534403afb3b91f'

function getCityName() {
    let CityName = document.querySelector("#inputCity").value
    console.log(CityName);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apikey}&units=metric`

fetch(url)
.then(response => {
    
    if (response.status  == 404) {
        document.querySelector('.error').innerHTML = "Invalid-City-Name"
    document.querySelector('.weather').style.display = 'none';

    } 
    else {
        return response.json()
        .then(data => {

   
    
  
            document.querySelector('.error').style.display = 'none';
        
            console.log(data)
            document.querySelector('.city').innerHTML = data.name
            document.querySelector('.temp').innerHTML = Math.round( data.main.temp) + '°C';
            document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`
            document.querySelector('.wind').innerHTML = `${data.wind.speed}kmh`
        
            console.log(data.weather[0].main);
        
            if (data.weather[0].main == 'Clouds'){
                document.querySelector('.weather-icon').src = './images/clouds.png';
            }
            else if (data.weather[0].main == 'Rain'){
                document.querySelector('.weather-icon').src = './images/rain.png';
            }
            else if (data.weather[0].main == 'Snow'){
                document.querySelector('.weather-icon').src = './images/snow.png';
            }
            else if (data.weather[0].main == 'Clear'){
                document.querySelector('.weather-icon').src = './images/clear.png';
            }
            else if (data.weather[0].main == 'Thunderstorm'){
                document.querySelector('.weather-icon').src = './images/thunder.png';
            }  
            else if (data.weather[0].main == 'Smoke'){
                document.querySelector('.weather-icon').src = './images/drizzle.png';
            }
            else if (data.weather[0].main == 'Mist'){
                document.querySelector('.weather-icon').src = './images/mist.png';
            }
        
            
        
            document.querySelector('.weather').style.display = 'block';
            }
        
            
         
        );

    }
    
    if (document.querySelector('.weather').style.display === 'none') {
        document.querySelector('.error').style.display = 'block';
    }

})


}