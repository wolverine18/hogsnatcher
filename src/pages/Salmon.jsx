import React from "react";
import API from "../API";
import Toast from "../components/Toast"

function Salmon() {
  const [getSalmon, setSalmon] = React.useState([]);
  const [getResponse, setResponse] = React.useState('');

  const updateSalmon = (field, value) => {
    const newSalmon = { ...getSalmon };
    newSalmon[field] = value;
    setSalmon(newSalmon);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    API.postNewSalmon(getSalmon)
      .then((res) => {
        console.log(res.message);
        setResponse(res.message);
        window.$(".toast").toast();
        window.$(".toast").toast("show");
      })
      .catch((err) => {
        console.log(err);
        setResponse(err);
      });
  };

  const cancelClicked = (event) => {};

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
            onChange={(event) => updateSalmon("date", event.target.value)}
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
              updateSalmon("surfaceTemp", event.target.value)
            }
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="airTemp">Air Tempurature</label>
          <input
            type="number"
            id="airTemp"
            className="form-control"
            value={getSalmon.airTemp || ""}
            onChange={(event) => updateSalmon("airTemp", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="paddleSize">Paddle Size</label>
          <input
            type="number"
            id="paddleSize"
            className="form-control"
            value={getSalmon.paddleSize || ""}
            onChange={(event) => updateSalmon("paddleSize", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="paddleName">Paddle Name</label>
          <select
            id="paddleName"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.paddleName}
            onChange={(event) => updateSalmon("paddleName", event.target.value)}
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
          <label htmlFor="lure">Lure</label>
          <input
            type="text"
            id="lure"
            className="form-control"
            value={getSalmon.lure || ""}
            onChange={(event) => updateSalmon("lure", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="rodType">Rod Type</label>
          <select
            id="rodType"
            className="form-control"
            defaultValue="DEFAULT"
            value={getSalmon.rodType}
            onChange={(event) => updateSalmon("rodType", event.target.value)}
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
            onChange={(event) => updateSalmon("visibility", event.target.value)}
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
            onChange={(event) => updateSalmon("comments", event.target.value)}
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
            onChange={(event) => updateSalmon("quantity", event.target.value)}
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
            onChange={(event) => updateSalmon("depth", event.target.value)}
          ></input>
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

        <Toast title="Salmon Catch Entered" body={getResponse}></Toast>

      </form>
    </div>
  );
}

export default Salmon;
