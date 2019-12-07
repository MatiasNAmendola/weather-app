import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

// functional component
const WeatherData = () => (
    <div>
        <WeatherTemperature />
        <WeatherExtraInfo />
    </div>
);

export default WeatherData;