import React from 'react';
import Title from './components/Title.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = 'db7c25f991ce57c7dee255bcd98e4741';

class App extends React.Component {

  state = {
    temperature : undefined,
    city :undefined,
    country: undefined,
    humidity :undefined,
    description: undefined,
    error: undefined 
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data= await api_call.json();
  
if(city && country){
  console.log( data);
	this.setState({
    temperature: data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity: data.main.humidity,
    description:data.weather[0].description,
    error: ""
  });
  
}
else{
  this.setState({
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error: "Please enter the city"
  });
  
}

  
}
  render() {
    return (
			<div>
				
            <div className="conatiner wrapper">
            <div className="row display-table">
            <div className="col-md-5 col-lg-5 col-sm-12 title-container" >
                 <Title/> 
                 
              </div>
              <div className="col-md-5 col-lg-5 col-sm-12 form-container"> 
              
                <Form getWeather = {this.getWeather} />
				        <Weather city={this.state.city}
				        country={this.state.country}
				        temperature = {this.state.temperature}
				        humidity= {this.state.temperature}
				        description={this.state.description}
				        error = {this.state.error}
				        />
              </div>
							</div>
						</div>
            </div>
					
				
    );
  }
}

export default App;
