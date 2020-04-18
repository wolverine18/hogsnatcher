import React from "react";
import API from "../API";
import Toast from "../components/Toast"
import Location from "../location";

function Bass() {
  const [getBass, setBass] = React.useState([]);
  const [getResponse, setResponse] = React.useState("");
  const [getTitle, setTitle] = React.useState("");
  const [getFirstLoad, setFirstLoad] = React.useState(true);

  function gotLocation(position) {   
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let parsedWeather = JSON.parse(this.responseText);
        let current = parsedWeather.current;
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');

        const newBass = { ...getBass };
        newBass["date"] = currentDate;
        newBass["airTemp"] = current.temp_f;
        newBass["windSpeed"] = current.wind_mph;
        newBass["windDir"] = current.wind_dir;
        newBass["pressure"] = current.pressure_in;
        newBass["humidity"] = current.humidity;
        newBass["precip"] = current.precip_in;
        newBass["cloudCover"] = current.cloud;
        newBass["condition"] = current.condition.text;
        setBass(newBass);
      }
    }
      xhttp.open("GET", `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lng}`, true);
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
  })

  const updateBass = (field, value) => {
    const newBass = { ...getBass };
    newBass[field] = value;
    setBass(newBass);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    window.$(".toast").toast();
    API.postNewBass(getBass)
      .then((res) => {
        setResponse(res.message);
        setTitle("Bass Catch Entered Successfully");
        window.$(".toast").toast("show");
      })
      .catch((err) => {
        setResponse(err.message);
        setTitle(err.code);
        window.$(".toast").toast("show");
      });
  };

  const cancelClicked = (event) => {};

  return (
    <div className="container-fluid">
      <h1>Enter A Bass Catch</h1>
      <form id="bassForm" onSubmit={formSubmitted}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            className="form-control datepicker"
            value={getBass.date || ""}
            onChange={(event) => updateBass("date", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="waterTemp">Water Tempurature:</label>
          <input
            type="number"
            id="waterTemp"
            placeholder="Water Temperature"
            className="form-control"
            value={getBass.waterTemp || ""}
            onChange={(event) => updateBass("waterTemp", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="waterClarity">Water Clarity:</label>
          <select
            id="htmlFor"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.waterClarity}
            onChange={(event) =>
              updateBass("waterClarity", event.target.value)
            }
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Clear</option>
            <option>Muddy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lure">Lure:</label>
          <select
            id="lure"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.lure}
            onChange={(event) => updateBass("lure", event.target.value)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Jig</option>
            <option>Jerkbait</option>
            <option>Crankbait</option>
            <option>Dropshot</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="waypoint">Waypoint:</label>
          <input
            type="text"
            id="waypoint"
            placeholder="Waypoint"
            className="form-control"
            value={getBass.waypoint || ""}
            onChange={(event) => updateBass("waypoint", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            placeholder="Comments"
            rows="5"
            className="form-control"
            value={getBass.comments || ""}
            onChange={(event) => updateBass("comments", event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Number of Fish:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Number of Fish"
            className="form-control"
            value={getBass.quantity || ""}
            onChange={(event) => updateBass("quantity", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="size">Size of Fish:</label>
          <select
            id="size"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.size}
            onChange={(event) => updateBass("size", event.target.value)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>0-2 lbs.</option>
            <option>2-3 lbs.</option>
            <option>4+ lbs.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="depth">Depth:</label>
          <input
            type="number"
            id="depth"
            placeholder="Depth"
            className="form-control"
            value={getBass.depth || ""}
            onChange={(event) => updateBass("depth", event.target.value)}
          ></input>
        </div>
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#weatherSection" aria-expanded="false" aria-controls="weatherSection">Toggle Weather Section</button>
        <div className="collapse" id="weatherSection">
        <div className="form-group">
          <label htmlFor="airTemp">Air Tempurature (F):</label>
          <input
            type="number"
            id="airTemp"
            placeholder="Air Temperature"
            className="form-control"
            value={getBass.airTemp || ""}
            onChange={(event) => updateBass("airTemp", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="windSpeed">Wind Speed (mph):</label>
          <input
            type="number"
            id="windSpeed"
            placeholder ="Wind Speed"
            className="form-control"
            value={getBass.windSpeed || ""}
            onChange={(event) => updateBass("windSpeed", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="windDir">Wind Direction:</label>
          <input
            type="text"
            id="windDir"
            placeholder ="Wind Direction"
            className="form-control"
            value={getBass.windDir || ""}
            onChange={(event) => updateBass("windDir", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="pressure">Pressure (in):</label>
          <input
            type="number"
            id="pressure"
            placeholder ="Pressure"
            className="form-control"
            value={getBass.pressure || ""}
            onChange={(event) => updateBass("pressure", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Humidity (%):</label>
          <input
            type="number"
            id="humidity"
            placeholder ="Humidity"
            className="form-control"
            value={getBass.humidity || ""}
            onChange={(event) => updateBass("humidity", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="precip">Precipitation (in):</label>
          <input
            type="number"
            id="precip"
            placeholder ="Precipitation"
            className="form-control"
            value={getBass.precip || 0}
            onChange={(event) => updateBass("precip", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="cloudCover">Cloud Cover (%):</label>
          <input
            type="number"
            id="cloudCover"
            placeholder ="Cloud Cover"
            className="form-control"
            value={getBass.cloudCover || ""}
            onChange={(event) => updateBass("cloudCover", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="condition">Conditions:</label>
          <input
            type="text"
            id="condition"
            placeholder ="Conditions"
            className="form-control"
            value={getBass.condition || ""}
            onChange={(event) => updateBass("condition", event.target.value)}
          ></input>
        </div>
        </div>
        

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={cancelClicked}
          >
            Cancel
          </button>
        </div>

        <Toast title={getTitle} body={getResponse}></Toast>

      </form>
    </div>
  );
}

export default Bass;
