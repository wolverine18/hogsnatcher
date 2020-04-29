import React from "react";
import API from "../API";
import Toast from "../components/Toast";
import Weather from "../components/Weather";

function Bass() {
  const [getBass, setBass] = React.useState([]);
  const [getResponse, setResponse] = React.useState("");
  const [getTitle, setTitle] = React.useState("");

  const updateBass = (field, target) => {
    const newBass = { ...getBass };
    if(field === "lure") {
      let valueString = '';
      let values = Array.from(target.selectedOptions, option => option.value);
      console.log(values);
      values.forEach(value => {
        console.log(value);
        valueString += value + ", ";
      })
      console.log(valueString);
      valueString = valueString.substring(0, values.length - 2);
      newBass[field] = values;
    } else {
      newBass[field] = target.value;
    }
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

  window.$(function () {
    
    window.$('lure').selectpicker();
  });

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
            onChange={(event) => updateBass("date", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lake">Lake:</label>
          <input
            type="text"
            id="lake"
            placeholder="Lake"
            className="form-control"
            value={getBass.lake || ""}
            onChange={(event) => updateBass("lake", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.waterClarity}
            onChange={(event) => updateBass("type", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Largemouth</option>
            <option>Smallmouth</option>
            <option>Largemouth and Smallmouth</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Number of Fish:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Number of Fish"
            className="form-control"
            value={getBass.quantity || ""}
            onChange={(event) => updateBass("quantity", event.target)}
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
            onChange={(event) => updateBass("waterTemp", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="waterClarity">Water Clarity:</label>
          <select
            id="htmlFor"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.waterClarity}
            onChange={(event) => updateBass("waterClarity", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Clear</option>
            <option>Stained</option>
            <option>Muddy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="depth">Depth:</label>
          <input
            type="text"
            id="depth"
            placeholder="Depth"
            className="form-control"
            value={getBass.depth || ""}
            onChange={(event) => updateBass("depth", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lure">Lure:</label>
          <select
            id="lure"
            className="selectpicker form-control" multiple data-live-search="true"
            value={getBass.lure}
            onChange={(event) => updateBass("lure", event.target)}
          >
            <optgroup label="Topwater">
              <option>Frog</option>
              <option>Spook</option>
            </optgroup>
            <optgroup label="Plastics">
              <option>Dropshot</option>
              <option>Jig</option>
              <option>Craw</option>
              <option>Ned Rig</option>
              <option>Butt Plug</option>
              <option>Tube</option>
            </optgroup>
            <optgroup label="Moving">
              <option>Jerkbait</option>
              <option>Crankbait</option>
              <option>Chatter Bait</option>
            </optgroup>
            <optgroup label="Misc">
              <option>Umbrella Rig</option>
            </optgroup>
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
            onChange={(event) => updateBass("waypoint", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="size">Size of Fish:</label>
          <select
            id="size"
            className="form-control"
            defaultValue="DEFAULT"
            value={getBass.size}
            onChange={(event) => updateBass("size", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>0-2 lbs.</option>
            <option>2-3 lbs.</option>
            <option>3-4 lbs.</option>
            <option>4+ lbs.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            placeholder="Comments"
            rows="5"
            className="form-control"
            value={getBass.comments || ""}
            onChange={(event) => updateBass("comments", event.target)}
          ></textarea>
        </div>

        <Weather updateCatch={updateBass} getCatch={getBass} setCatch={setBass} ></Weather>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        <Toast title={getTitle} body={getResponse}></Toast>
      </form>
    </div>
  );
}

export default Bass;
