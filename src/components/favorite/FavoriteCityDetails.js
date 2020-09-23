import React, { useEffect, useState } from 'react';
import DailyWeather from '../home/DailyWeather'
import { ApiContext } from '../ApiContext'

import { CityContext } from '../CityContext'
import Toast from '../Toast'

const FavoriteCityDetails = ({presentFahrenheit}) => {
    const [cityContext, setCityContext] = React.useContext(CityContext)
    const [fiveDaysWeather, setFiveDaysWeather] = useState([])
    const [apiContext, setApiContext] = React.useContext(ApiContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [isFavorite, setIsFavorite] = useState(true)

console.log(presentFahrenheit)

    useEffect(() => {
        fiveDaysForecasts()
    }, [presentFahrenheit, apiContext])
    
    // useEffect(() => {
    //     fiveDaysForecasts()
    // }, [apiContext])

    const fiveDaysForecasts = async () => {
        try {
            
            const forecasts = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityContext.locationKey}`
            // const query = `?apikey=${apiContext}&q=en-us`
            const query = `?apikey=${apiContext}&q=en-us&metric=${!presentFahrenheit}`
            const response = await fetch(forecasts + query)
            const data = await response.json()
            setFiveDaysWeather(data)
        } catch (err) {
            // setErrorMessage('Error Occurred, Please Try Again')
        }
    }

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    useEffect(() => {
        if (isFavorite) {
            let weatherInfo = localStorage.getItem('weatherInfo')
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {};
            weatherInfo[`${cityContext.cityName}`] = cityContext;
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo));
        }

        else {
            let weatherInfo = localStorage.getItem('weatherInfo') //neccecery?
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}; //neccecery?
            delete weatherInfo[`${cityContext.cityName}`]
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo));
        }
    }, [isFavorite])

    return (
        <>
            {/* {cityContext && */}
            <div className="favorite-city-details-card">
                <div className="favorite-city-details-image-continer">
                    <img src={cityContext.IsDayTime? '../img/day.gif' : '../img/night.gif'} className="day" />
                    <img src={isFavorite ? `../images/yellow-star.png` : `../images/star.png`} className="star" onClick={() => favorite()} />
                </div>
                <div className="favorite-city-details-header">
                <h2>{cityContext.cityName}</h2>
                <img src={`../img/icons/${cityContext.WeatherIcon}.svg`} className="temp-favorite-logo" />
                </div>

                {/* <h4>{cityContext.Temperature.Metric.Value}&deg;C</h4> */}

                {presentFahrenheit ?
                            <h4>{Math.round(cityContext.Temperature.Imperial.Value)}&deg;F</h4> :
                            <h4>{Math.round(cityContext.Temperature.Metric.Value)}&deg;C</h4>
                        }

                < div className="five-days-container" >
                    {(fiveDaysWeather.length != 0) && fiveDaysWeather.DailyForecasts.map((daily) => (
                        // <DailyWeather key={daily.Date} dailyForecasts={daily} />
                        <DailyWeather key={daily.Date} dailyForecasts={daily} presentFahrenheit={presentFahrenheit} />
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