import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const FavoriteCard = ({ cityName, cityWeatherInfo, temp }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    console.log(cityWeatherInfo)

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const history = useHistory()
    const goToMainPage = () => {
        localStorage.setItem("weatherForcast", `${cityName}`);
    }

    useEffect(() => {
        if (!isFavorite) {
            let weatherInfo = localStorage.getItem('weatherInfo')
            // weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {};
            delete weatherInfo[`${cityName}`]
            localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo));
            window.location.reload()
        }
    })

    return (
        <Card className="card-container">
            <img src={isFavorite ? `../images/yellow-star.png` : `../images/star.png`} className="favorite-logo-in-card" onClick={() => favorite()} />
            <Card.Body>
                <Card.Title>{cityName}</Card.Title>
                <Card.Img variant="top" src={`../img/icons/${cityWeatherInfo.WeatherIcon}.svg`} className="favorite-temp-logos" />
                <Card.Text>{temp}&deg;C</Card.Text>
                {/* <Button variant="primary" onClick={() => goToMainPage()}>Go</Button> */}
                <span className="input-group-btn" onClick={() => goToMainPage()}>
                    <Link to="/">See Forcast</Link>
                </span>
            </Card.Body>
        </Card >
    )
}

export default FavoriteCard