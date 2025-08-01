import { useState } from 'react';
import Header from './assets/component/Header/Header';
import Dashboard from './assets/component/Dashboard/Dashboard';


export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo] = useState({
        city: "Pune",
        feelsLike:25.5,
        humidity:90,
        temp:24.63,
        tempMax:24.63,
        tempMin: 24.63,
        weather: "overcast clouds",
        wind: 4.09,
        rain: 1.01

    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }

    return(
        <>
            
            <Header updateInfo={updateInfo} info={weatherInfo}/>
            <Dashboard info={weatherInfo}/>
        </>
    )

}