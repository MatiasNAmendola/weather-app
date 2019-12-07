import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

// functional component
const WeatherLocation = () => (
    <div>
        <Location></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;