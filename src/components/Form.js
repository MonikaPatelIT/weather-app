import React from 'react';

const Form = props => (
    <div><h1 className="title-container__title">Weather Finder</h1>
    <form onSubmit={props.getWeather} >
        <input type="text" name="city" placeholder="City.." defaultValue="Auckland" autofocus="true" />
        <input type="text" name="contry" placeholder="Contry.." defaultValue="NZ" />
        <button type="submit">Get the Weather</button>
    </form>
    </div>
    );

export default Form;

