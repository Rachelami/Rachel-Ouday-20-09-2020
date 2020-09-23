import React, { useState, useEffect } from 'react';
import WeatherStrip from './WeatherStrip'
import Toast from '../Toast'
import { Form } from 'react-bootstrap';
import { CityContext } from '../CityContext'

const HomePage = ({ searchString }) => {
    const [allCitiesInfo, setAllCitiesInfo] = useState([])
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [cityContext, setCityContext] = React.useContext(CityContext)

    const apiKey = 'XGMzt1wUSdbEJBAC8EEyVVAqCb4C0SxX'

    useEffect(() => {
        if (searchString.length >= 1) {
            getCities(searchString)
        }
    }, [searchString])

    useEffect(() => {
        console.log("cityContext")
        console.log(cityContext)
    }, [cityContext])

    const getCities = async (userInput) => {
        try {
            const cities = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
            const query = `?apikey=${apiKey}&q=${userInput}`
            const response = await fetch(cities + query)
            const data = await response.json()

            let allCitiesCurrentWeather = await Promise.all(data.map(async city => {
                return await getCurrentLocation(city.Key, city.LocalizedName)

            }))

            setAllCitiesInfo(allCitiesCurrentWeather)
        } catch (err) {
            setErrorMessage('cannot fetch because Api limitation')
        }
    }

    const getCurrentLocation = async (locationKey, locationName) => {
        try {
            const currentLocation = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
            const query = `?apikey=${apiKey}&language=en-us`
            const response = await fetch(currentLocation + query)
            const data = await response.json()
            data.cityName = locationName;
            data.locationKey = locationKey;
            return data
        } catch (err) {
            setErrorMessage('cannot fetch because Api limitation')
        }
    }

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    return (
        <>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Switch To Fahrenheit"
                    onChange={switchToFahrenheit}
                />
            </Form>

            <div className="location-card">
                {console.log(allCitiesInfo)}
                {allCitiesInfo.map((cityWeatherInfo) => (
                    <WeatherStrip
                        key={cityWeatherInfo.locationKey}
                        cityWeatherInfo={cityWeatherInfo}
                        presentFahrenheit={presentFahrenheit}
                        apiKey={apiKey} />
                ))}
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default HomePage