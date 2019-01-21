import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather} >
        <input type="text" name="city" placeholder="City.."/>
        <input type="text" name="contry" placeholder="Contry.."/>
        <button>Get the Weather</button>
    </form>
    );

export default Form;
