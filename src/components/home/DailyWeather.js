import React, { useState, useEffect } from 'react';

const DailyWeather = ({ dailyForecasts, presentFahrenheit }) => {
    const [day, setDay] = useState([])
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    useEffect(() => {
        const date = new Date(dailyForecasts.Date);
        const day = date.getDay();
        setDay(daysInWeek[day])
    }, [])

    return (
        <div className="one-day-container" >
            <img src={`../img/icons/${dailyForecasts.Day.Icon}.svg`} className="one-day-temp-logo" />
            <div className='min-max-temp'>
                <div>{dailyForecasts.Temperature.Minimum.Value}&deg;{presentFahrenheit? 'F': 'C'} - </div>
                <div>{dailyForecasts.Temperature.Maximum.Value}&deg;{presentFahrenheit? 'F': 'C'}</div>
            </div>
            <div>{day}</div>
        </div>
    )
}

export default DailyWeather