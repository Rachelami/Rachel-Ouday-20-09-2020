import React, { useState, useEffect } from 'react';
import DailyWeather from './DailyWeather'
import Toast from '../Toast'

const WeatherStrip = ({ cityWeatherInfo, apiKey, presentFahrenheit }) => {
    const [fiveDaysWeather, setFiveDaysWeather] = useState([])
    const [expended, setExpended] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const locationKey = cityWeatherInfo.locationKey

    const fiveDaysForecasts = async () => {
        try {
            setExpended(expended ? false : true)
            const forecasts = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`
            const query = `?apikey=${apiKey}&q=en-us&metric=${!presentFahrenheit}`
            console.log(query)
            const response = await fetch(forecasts + query)
            const data = await response.json()

            setFiveDaysWeather(data)

        } catch (err) {
            setErrorMessage('cannot fetch because Api limitation')
        }
    }

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    useEffect(() => {
        if (isFavorite) {
            let weatherInfo = localStorage.getItem('weatherInfo')
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {};
            console.log(cityWeatherInfo)
            weatherInfo[`${cityWeatherInfo.cityName}`] = cityWeatherInfo;
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo));
        }

        else {
            let weatherInfo = localStorage.getItem('weatherInfo') //neccecery?
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}; //neccecery?
            delete weatherInfo[`${cityWeatherInfo.cityName}`]
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo));
        }
    }, [isFavorite])

    return (
        <>
            <div className="weather-strip-container">
                <button className="weather-strip" onClick={() => fiveDaysForecasts()} >

                    <div className="weather-info-container">
                        < div > {cityWeatherInfo.cityName}</ div>
                        <div className="flex">
                            <img src={`../img/icons/${cityWeatherInfo.WeatherIcon}.svg`} className="temp-logos" />
                            <div>{cityWeatherInfo.WeatherText}</div>
                        </div>
                        {presentFahrenheit ?
                            <div>{cityWeatherInfo.Temperature.Imperial.Value}&deg;F</div> :
                            <div>{cityWeatherInfo.Temperature.Metric.Value}&deg;C</div>
                        }
                    </div>

                    < div className="five-days-container" >
                        {(fiveDaysWeather.length != 0 && expended) && fiveDaysWeather.DailyForecasts.map((daily) => (
                            <DailyWeather key={daily.Date} dailyForecasts={daily} presentFahrenheit={presentFahrenheit} />
                        ))
                        }
                    </div>
                </button >
                <img src={isFavorite ? `../images/yellow-star.png` : `../images/star.png`} className="favorite-logo" onClick={() => favorite()} />
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default WeatherStrip