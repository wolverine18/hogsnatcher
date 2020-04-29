import React from "react";
import API from "../API";
import Toast from "../components/Toast"
import Weather from "../components/Weather"

function Salmon() {
  const [getSalmon, setSalmon] = React.useState([]);
  const [getResponse, setResponse] = React.useState('');
  const [getTitle, setTitle] = React.useState('');

  const updateSalmon = (field, target) => {
    const newSalmon = { ...getSalmon };
    newSalmon[field] = target.value;
    setSalmon(newSalmon);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
        window.$(".toast").toast();
    API.postNewSalmon(getSalmon)
      .then((res) => {
        setResponse(res.message);
        setTitle("Salmon Catch Added Successfully");
        window.$(".toast").toast("show");
      })
      .catch((err) => {
        setResponse(err.message);
        setTitle(err.code);
        window.$(".toast").toast("show");
      });
  };

  return (
    <div className="container-fluid">
      <h1>Enter A Salmon Catch</h1>
      <form id="salmonForm" onSubmit={formSubmitted}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control datepicker"
            value={getSalmon.date || ""}
            onChange={(event) => updateSalmon("date", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="sufaceTemp">Surface Tempurature</label>
          <input
            type="number"
            id="sufaceTemp"
            className="form-control"
            value={getSalmon.surfaceTemp || ""}
            onChange={(event) =>
              updateSalmon("surfaceTemp", event.target)
            }
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="paddleSize">Paddle Size</label>
          <select
            id="paddleSize"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.paddleSize}
            onChange={(event) => updateSalmon("paddleSize", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paddleName">Paddle Name</label>
          <select
            id="paddleName"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.paddleName}
            onChange={(event) => updateSalmon("paddleName", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Blue Chrome Frog</option>
            <option>Black Pearl</option>
            <option>Chrome Frog</option>
            <option>Black Dot Crush</option>
            <option>Green Double Crush</option>
            <option>Dreamcatcher</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lure">Lure</label>
          <input
            type="text"
            id="lure"
            className="form-control"
            value={getSalmon.lure || ""}
            onChange={(event) => updateSalmon("lure", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="rodType">Rod Type</label>
          <select
            id="rodType"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.rodType}
            onChange={(event) => updateSalmon("rodType", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Down Rigger</option>
            <option>Dipsy Diver</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="visibility">Visibility</label>
          <select
            id="visibility"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.visibility}
            onChange={(event) => updateSalmon("visibility", event.target)}
          >
            <option hidden disabled value="DEFAULT">
              {" "}
              -- select an option --{" "}
            </option>
            <option>Sunny</option>
            <option>Partly Cloudy</option>
            <option>Cloudy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            placeholder="Comments"
            rows="5"
            className="form-control"
            value={getSalmon.comments || ""}
            onChange={(event) => updateSalmon("comments", event.target)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Number of Fish:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Number of Fish"
            className="form-control"
            value={getSalmon.quantity || ""}
            onChange={(event) => updateSalmon("quantity", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="depth">Depth:</label>
          <input
            type="number"
            id="depth"
            placeholder="Depth"
            className="form-control"
            value={getSalmon.depth || ""}
            onChange={(event) => updateSalmon("depth", event.target)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="depthFish">Depth of Fish:</label>
          <input
            type="number"
            id="depthFish"
            placeholder="Depth of Fish"
            className="form-control"
            value={getSalmon.depthFish || ""}
            onChange={(event) => updateSalmon("depthFish", event.target)}
          ></input>
        </div>

        <Weather updateCatch={updateSalmon} getCatch={getSalmon} setCatch={setSalmon} ></Weather>

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

export default Salmon;
