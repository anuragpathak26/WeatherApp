import "./Header.css"
import { useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


export default function Header({updateInfo}){
    let [city,setCity] = useState("")
    

    const API_URL="https://api.openweathermap.org/data/2.5/weather?"

    const API_KEY="5d75aa506285c0bedc6c70a695436512"

    let getWeatherInfo = async ()=>{

        let response =  await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)

       let jsonResponse = await response.json()
       
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

       }
       console.log(result)
       return result       
    }

    let handleChange =(evt)=>{
        setCity(evt.target.value)
    }

    let handleSubmit = async (evt)=>{
        
        evt.preventDefault();
        console.log(city)
        let newInfo = await getWeatherInfo();
        setCity("")
        updateInfo(newInfo);      
    }

    return(
        <section className="header">
            <div className="location">
                <LocationOnOutlinedIcon/>
                <span style={{fontSize:"1.1rem"}} value={city}>Pune,In</span>
            </div>
            <div style={{position:"relative"}}>
                <SearchOutlinedIcon
                        style={{
                                position: 'absolute',
                                top: '50%',
                                right: '5%',
                                transform: 'translate(5%, -50%)',
                                fontSize: "1.3rem",
                                cursor:"pointer"                                
                            }
                        }
                        onClick={handleSubmit}
                            />

                <input type="text" placeholder="search here"  onChange={handleChange}/>
            </div>
            <div>
                <CalendarMonthOutlinedIcon
                style={{
                    cursor:"pointer",
                    transition:"0.5s",
                    '&:hover':{
                        color:"#409ac7"
                    }
                }} />
            </div>

        </section>
    )
}