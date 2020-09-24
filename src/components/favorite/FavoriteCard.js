import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CityContext } from '../CityContext'

const FavoriteCard = ({ cityName, cityWeatherInfo }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const [cityContext, setCityContext] = React.useContext(CityContext)

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const goToMainPage = () => {
        setCityContext(cityWeatherInfo)
    }

    useEffect(() => {
        setCityContext('')
    }, [])

    useEffect(() => {
        if (!isFavorite) {
            let weatherInfo = localStorage.getItem('weatherInfo')
            weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {}
            delete weatherInfo[`${cityName}`]
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
        }
    })

    return (
        <>
            {isFavorite &&
                <Card className="card-container">
                    <img src={isFavorite ? `../images/yellow-star.png` : `../images/star.png`} className="favorite-logo-in-card" onClick={() => favorite()} />
                    <Card.Body>
                        <Card.Title>{cityName}</Card.Title>
                        <Card.Img variant="top" src={`../img/icons/${cityWeatherInfo.WeatherIcon}.svg`} className="favorite-temp-logos" />
                        <Card.Text>{Math.round(cityWeatherInfo.Temperature.Metric.Value)}&deg;C</Card.Text>
                        <Link to="/" onClick={() => goToMainPage()}>See Forcast</Link>
                    </Card.Body>
                </Card >
            }
        </>
    )
}

export default FavoriteCard