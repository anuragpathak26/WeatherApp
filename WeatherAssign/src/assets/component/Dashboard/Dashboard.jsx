import "./Dashboard.css"
import SunCloudy from "../../../assets/sun-cloudy.png";
import Rain from "../../../assets/rain.png";
import PartlySunny from "../../../assets/partly-sunny.png";
import SunWindy from "../../../assets/sun-windy.png";
import Compass from "../../../assets/compass.png";
import Drops from "../../../assets/drops.png";
import Wind from "../../../assets/Windspeed.png";
import Temp from "../../../assets/Temp.png";

export default function Dashboard({info}){
    return(
        <section className="dashBoard">
            <div className="home">
                <div className="img-1">
                    <div className="image">
                        <img src={SunCloudy} alt="" />
                        <div>
                            <div>
                                <span>{info.city}</span>
                                <span>Partly Cloudy</span>
                            </div>
                            <div>
                                <span>28<sup>o</sup></span>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div>
                            <div>
                                <img src={PartlySunny} alt="" />
                                <span>25 <sup>o</sup></span>
                            </div>
                            <div>
                                <span>Saturday</span>
                                <span>Sunny</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={SunWindy} alt="" />
                                <span>22 <sup>o</sup></span>
                            </div>
                            <div>
                                <span>Sunday</span>
                                <span>Windy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlights">
                    <h2>Today's Highlights</h2>
                    <div className="all-highlights">
                        <div>
                            <div>
                                <img src={Compass} alt="" />
                                <div>
                                    <span>Feels Like</span>
                                    <span>Normal</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    26 <sup>o</sup>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={SunCloudy} alt="" />
                                <div>
                                    <span>Cloudy</span>
                                    <span>Heavy</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    23 <sup>o</sup>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Rain} alt="" />
                                <div>
                                    <span>Rain</span>
                                    <span>Normal</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    22 <sup>o</sup>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Drops} alt="" />
                                <div>
                                    <span>Humidity</span>
                                    <span>Heavy</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    26 <span style={{fontSize:"15px", font:"none"}}>g/m <sup>3</sup></span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Wind} alt="" />
                                <div>
                                    <span>Wind Speed</span>
                                    <span>Normal</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Temp} alt="" />
                                <div>
                                    <span>Max-Temp</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    27 <sup>o</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}