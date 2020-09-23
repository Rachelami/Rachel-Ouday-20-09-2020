import React, { useState, useEffect } from 'react';
import WeatherStrip from './WeatherStrip'
import FavoriteCityDetails from '../favorite/FavoriteCityDetails'
import Toast from '../Toast'
import { Form } from 'react-bootstrap';
import { CityContext } from '../CityContext'
import { ApiContext } from '../ApiContext'

const HomePage = ({ searchString }) => {
    const [allCitiesInfo, setAllCitiesInfo] = useState([])
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [cityContext, setCityContext] = React.useContext(CityContext)
    const [apiContext, setApiContext] = React.useContext(ApiContext)


    useEffect(() => {
        setApiContext('IgtaUDwF0kV63s30hp2BLBMSQA4rwtRe')
    }, [])

    useEffect(() => {
        if (searchString.length >= 1) {
            getCities(searchString)
        }
    }, [searchString])

    const getCities = async (userInput) => {
        try {
            const cities = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
            const query = `?apikey=${apiContext}&q=${userInput}`
            const response = await fetch(cities + query)
            const data = await response.json()

            let allCitiesCurrentWeather = await Promise.all(data.map(async city => {
                return await getCurrentLocation(city.Key, city.LocalizedName)

            }))

            setAllCitiesInfo(allCitiesCurrentWeather)
        } catch (err) {
            setErrorMessage('Cannot fetch because Api limitation')
        }
    }

    const getCurrentLocation = async (locationKey, locationName) => {
        try {
            const currentLocation = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
            const query = `?apikey=${apiContext}&language=en-us`
            const response = await fetch(currentLocation + query)
            const data = await response.json()
            data[0].cityName = locationName;
            data[0].locationKey = locationKey;
            return data
        } catch (err) {
            setErrorMessage('Cannot fetch because Api limitation')
        }
    }

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    return (
        <>
            {/* {!cityContext &&
                <> */}
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Switch To Fahrenheit"
                    onChange={switchToFahrenheit}
                />
            </Form>

            {/* {(allCitiesInfo && !cityContext) && */}
            {!cityContext &&
                <div className="location-card">
                    {allCitiesInfo.map((cityWeatherInfo) => (
                        <div key={cityWeatherInfo[0].locationKey}>
                            {cityWeatherInfo &&
                                <WeatherStrip
                                    key={cityWeatherInfo[0].locationKey}
                                    cityWeatherInfo={cityWeatherInfo[0]}
                                    presentFahrenheit={presentFahrenheit}
                                    apiKey={apiContext} />
                            }
                        </div>
                    ))}
                </div>
            }
            {/* </>
            } */}
            {cityContext && <FavoriteCityDetails presentFahrenheit={presentFahrenheit} />}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default HomePage