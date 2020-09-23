import React from 'react';
import FavoriteCard from './FavoriteCard'


const Favorite = () => {
    const favoriteCities = []
    let weatherInfo = localStorage.getItem('weatherInfo')
    weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {};


    for (const [key, value] of Object.entries(weatherInfo)) {
        console.log(key)
        console.log(value)
        const temp = Math.round(value.Temperature.Metric.Value)
        favoriteCities.push(
            <FavoriteCard key={key} cityName={key} cityWeatherInfo={value} temp={temp} />
        )
    }

    return (
        <div className="favorite-container">
            {favoriteCities}
        </div>
    )
}

export default Favorite