const apikey = "9b624be6a4e86a2ede801d14943490a5";
const apiurl = `https://api.openweathermap.org/data/2.5/weather`;
const city = document.querySelector(".input input");
const search = document.querySelector(".button");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".weathericon");
const conditionp = document.querySelector(".condition");
search.addEventListener("click",(evt)=>{
    evt.preventDefault();
 let city_name = city.value;
 console.log(city_name);
    weather(city_name);
});

const weather = async (city_name)=>{
    
    let url = `${apiurl}?q=${city_name}&appid=9b624be6a4e86a2ede801d14943490a5&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    if(data.message === "city not found")
    {
        alert("City NOt Found");
    }
    console.log(data);
    temperature.innerText = data.main.temp+"°c";
    document.querySelector(".cityname").innerText = data.name;
    document.querySelector(".per").innerText = data.main.humidity+"%";
    document.querySelector(".windper").innerText = data.wind.speed +"Km/H"
    const cloud = data.weather[0].main;
    
    if(cloud === "Mist")
    {
        condition.src= "mist.png";
        conditionp.innerText = cloud;
    }else if(cloud === "Clear")
    {
        condition.src= "clear.png";
        conditionp.innerText = cloud;
    }else if(cloud === "Clouds")
    {
        condition.src="clouds.png";
        conditionp.innerText = cloud;
    }else if(condition === "Drizzle")
    {
        condition.src = "drizzle.png";
        conditionp.innerText = cloud;
    }else if(condition === "Rain")
    {
        condition.src = "rain.png";
        conditionp.innerText = cloud;
    }else{
        condition.src = "snow.png";
        conditionp.innerText = cloud;
    }
}


