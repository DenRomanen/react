import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import "./vendor/normalize.css";
import "./App.css";

const API_KEY = "82b797b6ebc625032318e16f1b42c016";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  };
  gettingWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: "Введите название города"
      });
    }
  };

  render() {
    return (
      <div className="body">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
