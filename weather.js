const city = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const cityname = document.getElementById('cityname');
cityname.style.textAlign="start"
cityname.style.padding="10px"
cityname.style.fontSize="20px"
const image = document.getElementById('image');
image.style.height="50px"
const temp = document.getElementById('temp');
temp.style.fontSize="40px"
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const mist = document.getElementById('mist')
const cloudy = document.getElementById('cloudy')
const figcaption = document.getElementById('figcaption');
figcaption.style.fontSize="20px"
figcaption.style.marginTop="20px"
const whole = document.querySelector('.whole')
const body = document.getElementsByTagName('body')

const div = document.querySelector('.container')
console.log(div)

searchButton.addEventListener('click', () => {
   if(city.value==""){
whole.innerHTML=`<h1 style="text-align:center;font-size:50px;padding-top:100px">404 Error<br>Not Found</h1>`



   }else{
    let url = 'https://api.openweathermap.org/data/2.5/weather?';
    let key = '960e6c20f7e09d88d42e0a6528ef4faa';

    async function getWeather() {
        
            let response = await fetch(url + `q=${city.value}` + `&appid=${key}`+`&units=metric`);
            let data = await response.json();
            display(data);
            console.log(data)
            console.log(response)
       
    }

    const display = (i) => {
        cityname.innerHTML = `<i class="material-icons">place</i>${i.name}`;
        temp.innerHTML = ` ${Math.round(i.main.temp)}°C`;
        wind.innerHTML = `wind <br> ${Math.round(i.wind.speed) + 'km/h'}`;
        humidity.innerHTML=`humidity <br>${Math.round(i.main.humidity)+'%'}`
        pressure.innerHTML=`pressure <br>${Math.round(i.main.pressure)+'Mb'}`
        
        if ((i.weather[0].main).toLowerCase() == 'haze') {
            image.src=``
            figcaption.innerHTML =  i.weather[0].description;
        } else if ((i.weather[0].main).toLowerCase() == 'clouds') {
            image.src=`images/clouds.png`
            figcaption.innerHTML = i.weather[0].description;
        }else if ((i.weather[0].main).toLowerCase() == 'Mist') {
            image.src=``
            figcaption.innerHTML =  i.weather[0].description;
        }else if ((i.weather[0].main).toLowerCase() == 'clear') {
            image.src=`images/sun.png`
          
            figcaption.innerHTML =  i.weather[0].description;
        }
    };

    getWeather();
    city.value="";
   }
});