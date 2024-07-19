const day = document.getElementById("day");
const today_data = document.getElementById("today_data");

const date   = new Date();
const days =['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATERDAY'];
day.innerText  = `${days[date.getDay()]}`;

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

today_data.innerText = `${date.getDate()} ${months[date.getMonth()]}`;

const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_val = document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".data_hide");



const getInfo = async (event)=>{
      event.preventDefault();
      const cityval = cityName.value;

      if(cityval===""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');

      }
      else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8dda3f69065a74788b14dcee16de38f8`

            const response = await fetch(url);
            const objdata = await response.json();
            const arrdata = [objdata];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_val.innerText = `${arrdata[0].main.temp}`
            const tempmood =`${arrdata[0].weather[0].main}`;

            if(tempmood=="Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }else if(tempmood=="Clouds"){
                temp_status.innerHTML= "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            }else if(tempmood=="Rain"){
                temp_status.innerHTML ="<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            }
            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = `Plz enter the city name properly`
            datahide.classList.add('data_hide');
        }

      }

}


submitBtn.addEventListener("click" ,getInfo);