import React from 'react';
import FavoriteCard from './FavoriteCard'


const Favorite = () => {
const fakedata = {"Tokyo":{"LocalObservationDateTime":"2020-09-23T02:16:00+09:00","EpochTime":1600794960,"WeatherText":"Light rain","WeatherIcon":12,"HasPrecipitation":true,"PrecipitationType":"Rain","IsDayTime":false,"Temperature":{"Metric":{"Value":18.7,"Unit":"C","UnitType":17},"Imperial":{"Value":66,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us","Link":"http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us","cityName":"Tokyo","locationKey":"226396"},"Tongren":{"LocalObservationDateTime":"2020-09-23T01:16:00+08:00","EpochTime":1600794960,"WeatherText":"Overcast","WeatherIcon":7,"HasPrecipitation":false,"PrecipitationType":null,"LocalSource":{"Id":7,"Name":"Huafeng","WeatherCode":"02"},"IsDayTime":false,"Temperature":{"Metric":{"Value":16.1,"Unit":"C","UnitType":17},"Imperial":{"Value":61,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/cn/tongren/58491/current-weather/58491?lang=en-us","Link":"http://www.accuweather.com/en/cn/tongren/58491/current-weather/58491?lang=en-us","cityName":"Tongren","locationKey":"58491"}}
    const favoriteCities = []
    let weatherInfo = localStorage.getItem('weatherInfo')
    weatherInfo = weatherInfo ? JSON.parse(weatherInfo) : {};
    weatherInfo = JSON.parse(weatherInfo)

    console.log(typeof(weatherInfo))
    console.log(typeof(fakedata))

    for (const [key, value] of Object.entries(weatherInfo)) {
        console.log(key)
        console.log(value)
        const temp = value.Temperature.Metric.Value
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