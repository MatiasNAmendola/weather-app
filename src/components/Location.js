import React from 'react';

// functional component
const Location = (props) => {
    // destructuring
    const { city } = props;

    return (
        <div><h1>{city}</h1></div>
    )
};

export default Location;