import React from 'react';
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
  async componentDidMount() {
    //default City and Country value to load data
    let city ='Auckland';
    let country= 'NZ';
      
  const api_call1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data= await api_call1.json();
  
  if(data){
    this.setState({
      temperature: data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity: data.main.humidity,
      description:data.weather[0].description,
      error: ""
    });
    
  }
  }

  getWeather = async (e) => {
    e.preventDefault();
   const city  = e.target.elements.city.value;
   const country = e.target.elements.city.value;
  
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data= await api_call.json();
  
if(city && country){
  
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
          <div className="col-md-12">
            <div className="weather-container"  >
              <div className ="content-container ">
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
				</div>
      </div>
					
				
    );
  }
}

export default App;
