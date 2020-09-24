import React, { useEffect, useState } from 'react'
import { ApiContext } from '../ApiContext'
import { CityContext } from '../CityContext'
import DailyWeather from '../home/DailyWeather'
import Toast from '../Toast'

const FavoriteCityDetails = ({presentFahrenheit}) => {
    const [cityContext, setCityContext] = React.useContext(CityContext)
    const [fiveDaysWeather, setFiveDaysWeather] = useState([])
    const [apiContext, setApiContext] = React.useContext(ApiContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [isFavorite, setIsFavorite] = useState(true)

    useEffect(() => {
        fiveDaysForecasts()
    }, [presentFahrenheit, apiContext])

    const fiveDaysForecasts = async () => {
        try {
            const forecasts = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityContext.locationKey}`
            const query = `?apikey=${apiContext}&q=en-us&metric=${!presentFahrenheit}`
            const response = await fetch(forecasts + query)
            const data = await response.json()

            setFiveDaysWeather(data)

        } catch (err){}
    }

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    useEffect(() => {
        if (isFavorite) {
            let weatherInfo = localStorage.getItem('weatherInfo')
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}
            weatherInfo[`${cityContext.cityName}`] = cityContext
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
        }
        else {
            let weatherInfo = localStorage.getItem('weatherInfo')
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}
            delete weatherInfo[`${cityContext.cityName}`]
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
        }
    }, [isFavorite])

    return (
        <>
            <div className="favorite-city-details-card">
                <div className="favorite-city-details-image-continer">
                    <img src={cityContext.IsDayTime? '../img/day.gif' : '../img/night.gif'} className="day-night" />
                    <img src={isFavorite ? `../images/yellow-star.png` : `../images/star.png`} className="star" onClick={() => favorite()} />
                </div>
                <div className="favorite-city-details-header">
                <h2>{cityContext.cityName}</h2>
                <img src={`../img/icons/${cityContext.WeatherIcon}.svg`} className="temp-favorite-logo" />
                </div>

                {presentFahrenheit ?
                            <h4>{Math.round(cityContext.Temperature.Imperial.Value)}&deg;F</h4> :
                            <h4>{Math.round(cityContext.Temperature.Metric.Value)}&deg;C</h4>
                        }

                < div className="five-days-container" >
                    {(fiveDaysWeather.length != 0) && fiveDaysWeather.DailyForecasts.map((dailyForecast) => (
                        <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                    ))
                    }
                </div>
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}

            {/* } */}
        </>
    )
}

export default FavoriteCityDetails