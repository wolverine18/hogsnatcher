import React from "react";

function WalleyeItem({ walleye }) {
  return (
    <tr data-id={walleye.id}>
      <td className="col-md-3">{walleye.comments}</td>
      <td className="col-md-3">{walleye.date}</td>
      <td className="col-md-3">{walleye.depth}</td>
      <td className="col-md-3">{walleye.lure}</td>
      <td className="col-md-3">{walleye.quantity}</td>
      <td className="col-md-3">{walleye.surfaceTemp}</td>
      <td className="col-md-3">{walleye.userID}</td>
      <td className="col-md-3">{walleye.visibility}</td>
      <td className="col-md-3">{walleye.airTemp}</td>
      <td className="col-md-3">{walleye.windSpeed}</td>
      <td className="col-md-3">{walleye.windDir}</td>
      <td className="col-md-3">{walleye.pressure}</td>
      <td className="col-md-3">{walleye.humidity}</td>
      <td className="col-md-3">{walleye.precip}</td>
      <td className="col-md-3">{walleye.cloudCover}</td>
      <td className="col-md-3">{walleye.conditions}</td>
    </tr>
  );
}

function WalleyeTable({ walleye }) {
  const walleyeItems = walleye.map((w, index) => (
    <WalleyeItem key={w.id} walleye={w} />
  ));

  return (
    <div>
      <table className="table table-hover table-responsive w-auto">
        <thead>
          <tr className="bg-primary">
            <th className="col-md-3" scope="col">
              Comments
            </th>
            <th className="col-md-3" scope="col">
              Date
            </th>
            <th className="col-md-3" scope="col">
              Depth
            </th>
            <th className="col-md-3" scope="col">
              Lure
            </th>
            <th className="col-md-3" scope="col">
              Quantity
            </th>
            <th className="col-md-3" scope="col">
              Surface Temperature
            </th>
            <th className="col-md-3" scope="col">
              User
            </th>
            <th className="col-md-3" scope="col">
              Visibility
            </th>
            <th className="col-md-3" scope="col">
              Air Temperature
            </th>
            <th className="col-md-3" scope="col">
              Wind Speed
            </th>
            <th className="col-md-3" scope="col">
              Wind Direction
            </th>
            <th className="col-md-3" scope="col">
              Pressure
            </th>
            <th className="col-md-3" scope="col">
              Humidity
            </th>
            <th className="col-md-3" scope="col">
              Precipitation
            </th>
            <th className="col-md-3" scope="col">
              Cloud Cover
            </th>
            <th className="col-md-3" scope="col">
              Conditions
            </th>
          </tr>
        </thead>
        <tbody>{walleyeItems}</tbody>
      </table>
    </div>
  );
}

export default WalleyeTable;
