import React from "react";
import Location from "../location";

function Weather({ updateCatch, getCatch, setCatch }) {
  const [getFirstLoad, setFirstLoad] = React.useState(true);

  function gotLocation(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let parsedWeather = JSON.parse(this.responseText);
        let current = parsedWeather.current;
        let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

        const newCatch = { ...getCatch };
        newCatch["date"] = currentDate;
        newCatch["airTemp"] = current.temp_f;
        newCatch["windSpeed"] = current.wind_mph;
        newCatch["windDir"] = current.wind_dir;
        newCatch["pressure"] = current.pressure_in;
        newCatch["humidity"] = current.humidity;
        newCatch["precip"] = current.precip_in;
        newCatch["cloudCover"] = current.cloud;
        newCatch["conditions"] = current.condition.text;
        setCatch(newCatch);
      }
    };
    xhttp.open(
      "GET",
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lng}`,
      true
    );
    xhttp.send();
  }

  function errorHandler(err) {
    console.error("Error Code=" + err.code + " - " + err.message);
  }

  React.useEffect(() => {
    if (getFirstLoad) {
      setFirstLoad(false);
      Location.getLocation(gotLocation, errorHandler);
    }
  });
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#weatherSection"
        aria-expanded="false"
        aria-controls="weatherSection"
      >
        Toggle Weather Section
      </button>
      <div className="collapse" id="weatherSection">
        <div className="form-group">
          <label htmlFor="airTemp">Air Tempurature (F):</label>
          <input
            type="number"
            id="airTemp"
            placeholder="Air Temperature"
            className="form-control"
            value={getCatch.airTemp || ""}
            onChange={(event) => updateCatch("airTemp", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="windSpeed">Wind Speed (mph):</label>
          <input
            type="number"
            id="windSpeed"
            placeholder="Wind Speed"
            className="form-control"
            value={getCatch.windSpeed || ""}
            onChange={(event) => updateCatch("windSpeed", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="windDir">Wind Direction:</label>
          <input
            type="text"
            id="windDir"
            placeholder="Wind Direction"
            className="form-control"
            value={getCatch.windDir || ""}
            onChange={(event) => updateCatch("windDir", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="pressure">Pressure (in):</label>
          <input
            type="number"
            id="pressure"
            placeholder="Pressure"
            className="form-control"
            value={getCatch.pressure || ""}
            onChange={(event) => updateCatch("pressure", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Humidity (%):</label>
          <input
            type="number"
            id="humidity"
            placeholder="Humidity"
            className="form-control"
            value={getCatch.humidity || ""}
            onChange={(event) => updateCatch("humidity", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="precip">Precipitation (in):</label>
          <input
            type="number"
            id="precip"
            placeholder="Precipitation"
            className="form-control"
            value={getCatch.precip || ""}
            onChange={(event) => updateCatch("precip", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="cloudCover">Cloud Cover (%):</label>
          <input
            type="number"
            id="cloudCover"
            placeholder="Cloud Cover"
            className="form-control"
            value={getCatch.cloudCover || ""}
            onChange={(event) => updateCatch("cloudCover", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="conditions">Conditions:</label>
          <input
            type="text"
            id="conditions"
            placeholder="Conditions"
            className="form-control"
            value={getCatch.condition || ""}
            onChange={(event) => updateCatch("conditions", event.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Weather;
