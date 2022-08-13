const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');

const temp_status=document.getElementById("temp_status");
const temp_val=document.getElementById("temp_val");
const feels_like=document.getElementById("feels_like");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind_speed");
const condition=document.getElementById("condition");
const data_hide=document.querySelector('.middle-layer')

const getInfo=async(event)=>{
    event.preventDefault()
    
    let cityVal=cityName.value;
    if(cityVal===""){
       city_name.innerText=`Please Enter a City`;
       data_hide.classList.add('data_hide');
    }
    else{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=532bfe6088e412164e19544d152d26c5&units=metric`
       const response = await  fetch(url);
      
       const data=await response.json();
       const arrData=[data];
       city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
       
       temp_val.innerText=arrData[0].main.temp;
       feels_like.innerText= "Feels Like :"+arrData[0].main.feels_like +"°C";
       humidity.innerText= "Humidity :"+arrData[0].main.humidity+"%";
       wind_speed.innerText="Wind speed :"+arrData[0].wind.speed +"km/h";
       condition.innerText="Condition :"+arrData[0].weather[0].description;
       
       const tempmood=arrData[0].weather[0].main;
       if(tempmood=="Clear"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>"
       }
       else if(tempmood=="Clouds"){
        temp_status.innerHTML= "<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
       }
       else if(tempmood=="Rain"){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
       }
      
       else{
        temp_status.innerHTML= "<i class='fas fa-cloud' style='color: #fff'></i>"
         
       }
       data_hide.classList.remove('data_hide');   
        } catch (error) {
            city_name.innerText=`Please Enter a Valid  City`;
            data_hide.classList.add('data_hide');
            feels_like.innerText="";
            humidity.innerText= "";
            wind_speed.innerText="";
            condition.innerText="";
        }
        
    }

}
submitBtn.addEventListener('click',getInfo);
