import React from 'react';

// functional component
const Location = (props) => {
    console.log(props);
    debugger;
    return (<div><h1>{props.city}</h1></div>)
};

export default Location;