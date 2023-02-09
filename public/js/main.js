const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    // If you do this below ur page will not refresh coz forms have a default behaviour of refreshing the pages
    event.preventDefault();
    // Now from this code below whatever the user will search or enter it will be stored in cityVal //
    let cityVal = cityName.value; 
    if(cityVal === '') {
     city_name.innerText = `Please provide a name before you search`;
     datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=13b1d82059f83ee4dcba3106892178c4`;
            const response = await fetch(url);
            // This code below will convert your json data to object
            const data = await response.json()
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
    
         if(tempMood == "Clear") {
             temp_status.innerHTML = "<i class = 'fas fa-sun' style='color: #eccc68;'></i>";
         }
         else if(tempMood == "Clouds") {
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style='color: #f1f2f6;'></i>";  
         }
         else if(tempMood == "Rain") {
            temp_status.innerHTML = "<i class = 'fas fa-rain' style='color: #a4b0be;'></i>";  
         }
         else{
            temp_status.innerHTML = "<i class = 'fas fa-sun' style='color: ##f1f2f6;'></i>";  
         }
         datahide.classList.remove('data_hide');
        }
        catch{
        city_name.innerText = `Please enter the city name properly`;
        datahide.classList.add('data_hide');
        }
     
    }
    
}

submitBtn.addEventListener('click', getInfo);