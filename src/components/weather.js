import React from "react";

const Weather = props => (
  <div>
    {props.temp && (
      <div>
        <p>
          Местоположение: {props.country}, {props.city}{" "}
        </p>
        <p>Температра: {props.temp} &#176;C</p>
      </div>
    )}
    {props.error && <p>Ошибка: {props.error} </p>}
  </div>
);

export default Weather;
