import React from "react";
import API from "../API";
import Toast from "../components/Toast";
import Weather from "../components/Weather";

function Walleye() {
  const [getWalleye, setWalleye] = React.useState([]);
  const [getResponse, setResponse] = React.useState('');
  const [getTitle, setTitle] = React.useState('');

  const updateWalleye = (field, value) => {
    const newWalleye = { ...getWalleye };
    newWalleye[field] = value;
    setWalleye(newWalleye);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    window.$(".toast").toast();
    API.postNewWalleye(getWalleye)
      .then((res) => {
        setResponse(res.message);
        setTitle('Walleye Catch Added Successfully');
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
      <h1>Enter A Walleye Catch</h1>
      <form id="WalleyeForm" onSubmit={formSubmitted}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control datepicker"
            value={getWalleye.date || ""}
            onChange={(event) => updateWalleye("date", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="sufaceTemp">Surface Tempurature</label>
          <input
            type="number"
            id="sufaceTemp"
            className="form-control"
            value={getWalleye.surfaceTemp || ""}
            onChange={(event) =>
              updateWalleye("surfaceTemp", event.target.value)
            }
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lure">Lure</label>
          <input
            type="text"
            id="lure"
            className="form-control"
            value={getWalleye.lure || ""}
            onChange={(event) => updateWalleye("lure", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="visibility">Visibility</label>
          <select
            id="visibility"
            className="form-control"
            defaultValue="DEFAULT"
            value={getWalleye.visibility}
            onChange={(event) => updateWalleye("visibility", event.target.value)}
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
            value={getWalleye.comments || ""}
            onChange={(event) => updateWalleye("comments", event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Number of Fish:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Number of Fish"
            className="form-control"
            value={getWalleye.quantity || ""}
            onChange={(event) => updateWalleye("quantity", event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="depth">Depth:</label>
          <input
            type="number"
            id="depth"
            placeholder="Depth"
            className="form-control"
            value={getWalleye.depth || ""}
            onChange={(event) => updateWalleye("depth", event.target.value)}
          ></input>
        </div>

        <Weather updateCatch={updateWalleye} getCatch={getWalleye} setCatch={setWalleye} ></Weather>

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

export default Walleye;
