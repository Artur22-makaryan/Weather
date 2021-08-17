import { useState} from "react";
import axios from 'axios'
import  'materialize-css'


function Weather() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()


    let temperature = ''
    let temperature1 = ''
    let temperature2 = ''
    let wind = ''
    let wind1 = ''
    let wind2 = ''

if(weather!==undefined){
    temperature = weather[0].temperature
    temperature1 = weather[1].temperature
    temperature2 = weather[2].temperature
    wind = weather[0].wind
    wind1 = weather[1].wind
    wind2 = weather[2].wind
}

    function SearchWeather() {
        axios
            .get(`https://goweather.herokuapp.com/weather/${city}`)
            .then((response) => {

                if (response.statusText === 'OK') {
                    if (response.data) {
                        //console.log(response.data)
                        setWeather(response.data.forecast);
                    }
                }
            }).catch(()=>{alert('Wrong location name!!')});

    }





    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input  type="text" className="validate" value={city}
                                   onChange={(e)=>{setCity(e.target.value)}}
                                   placeholder={'Write city name'}/>
                                <label >Location</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Location</span>
                        </div>
                    </div>
                </form>
            </div>


            <a className="waves-effect waves-light btn-large" onClick={SearchWeather}>Search</a>

                <div><h1>Today</h1><h3>{temperature}</h3><h3>{wind}</h3></div>
                <div><h1>Tomorrow</h1><h3>{temperature1}</h3><h3>{wind1}</h3></div>
                <div><h1>The day after tomorrow</h1><h3>{temperature2}</h3><h3>{wind2}</h3></div>



        </div>
    )


}
export default Weather
