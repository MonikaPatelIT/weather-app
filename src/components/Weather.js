import React from 'react';

const Weather = props => (
            <div>
                   
                    {
                    props.description &&  
                    <h1 className="weather__description"> {props.description}</h1>
                    }
                    { props.city && props.country &&  <h3 className="weather__area">{props.city} , {props.country}</h3>}
                    {
                        props.temperature &&  <p className="temp">
                        <span className="weather__tempvalue">{props.temperature} </span>
                        <span className="weather__deg">0</span>
                        <span className="weather__temptype">C</span>
                    </p>
                    }
                 
                    {
                     props.error &&  
                    <p className="weather__error">Error : {props.error}</p>
                    }
            </div>
          
    
);

export default Weather;
