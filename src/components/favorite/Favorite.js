import React from 'react'
import FavoriteCard from './FavoriteCard'

const Favorite = () => {
    const favoriteCities = []
    let weatherInfo = localStorage.getItem('weatherInfo')
    weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}

    for (const [key, value] of Object.entries(weatherInfo)) {
        favoriteCities.push(
            <FavoriteCard key={key} cityName={key} cityWeatherInfo={value} />
        )
    }

    return (
        <div className="favorite-container">
            {favoriteCities}
        </div>
    )
}

export default Favorite