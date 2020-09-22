import React, { useState, useEffect } from 'react';
import WeatherStrip from './WeatherStrip'
import Toast from '../Toast'
import { Form } from 'react-bootstrap';

const objGetCT = [
    {
        "Version": 1,
        "Key": "228592",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Zgharta",
        "Country": {
            "ID": "LB",
            "LocalizedName": "Lebanon"
        },
        "AdministrativeArea": {
            "ID": "AS",
            "LocalizedName": "North Lebanon"
        }
    },
    {
        "Version": 1,
        "Key": "263023",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Zgorzelec",
        "Country": {
            "ID": "PL",
            "LocalizedName": "Poland"
        },
        "AdministrativeArea": {
            "ID": "02",
            "LocalizedName": "Lower Silesia"
        }
    },
    {
        "Version": 1,
        "Key": "264358",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Zgierz",
        "Country": {
            "ID": "PL",
            "LocalizedName": "Poland"
        },
        "AdministrativeArea": {
            "ID": "10",
            "LocalizedName": "Łódź"
        }
    },
    {
        "Version": 1,
        "Key": "33320",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zgosca",
        "Country": {
            "ID": "BA",
            "LocalizedName": "Bosnia and Herzegovina"
        },
        "AdministrativeArea": {
            "ID": "BIH",
            "LocalizedName": "Federation of Bosnia and Herzegovina"
        }
    },
    {
        "Version": 1,
        "Key": "48791",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zgurovo",
        "Country": {
            "ID": "BG",
            "LocalizedName": "Bulgaria"
        },
        "AdministrativeArea": {
            "ID": "10",
            "LocalizedName": "Kyustendil"
        }
    },
    {
        "Version": 1,
        "Key": "49846",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zgalevo",
        "Country": {
            "ID": "BG",
            "LocalizedName": "Bulgaria"
        },
        "AdministrativeArea": {
            "ID": "15",
            "LocalizedName": "Pleven"
        }
    },
    {
        "Version": 1,
        "Key": "3596",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zgoum",
        "Country": {
            "ID": "DZ",
            "LocalizedName": "Algeria"
        },
        "AdministrativeArea": {
            "ID": "39",
            "LocalizedName": "El Oued"
        }
    },
    {
        "Version": 1,
        "Key": "171691",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zguderi",
        "Country": {
            "ID": "GE",
            "LocalizedName": "Georgia"
        },
        "AdministrativeArea": {
            "ID": "SK",
            "LocalizedName": "Shida Kartli"
        }
    },
    {
        "Version": 1,
        "Key": "324342",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Zghurivka",
        "Country": {
            "ID": "UA",
            "LocalizedName": "Ukraine"
        },
        "AdministrativeArea": {
            "ID": "32",
            "LocalizedName": "Kiev"
        }
    },
    {
        "Version": 1,
        "Key": "298829",
        "Type": "City",
        "Rank": 81,
        "LocalizedName": "Zgornja Kungota",
        "Country": {
            "ID": "SI",
            "LocalizedName": "Slovenia"
        },
        "AdministrativeArea": {
            "ID": "055",
            "LocalizedName": "Kungota"
        }
    }
]


const HomePage = ({ searchString }) => {
    const [allCitiesInfo, setAllCitiesInfo] = useState([])
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const apiKey = 'AlkaZaIDhoRfxRAafUr2F9GIPNMNqwAB'

    useEffect(() => {
        if (searchString.length >= 1) {
            getCities(searchString)
        }
    }, [searchString])

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