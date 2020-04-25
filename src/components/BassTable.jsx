import React from "react";

function BassItem({ bass }) {
  return (
    <tr data-id={bass.id}>
      <td className="col-md-3">{bass.date}</td>
      <td className="col-md-3">{bass.lake}</td>
      <td className="col-md-3">{bass.quantity}</td>
      <td className="col-md-3">{bass.depth}</td>
      <td className="col-md-3">{bass.airTemp}</td>
      <td className="col-md-3">{bass.waterTemp}</td>
      <td className="col-md-3">{bass.conditions}</td>
      <td className="col-md-3">{bass.windSpeed}</td>
      <td className="col-md-3">{bass.waterClarity}</td>
      <td className="col-md-3">{bass.lure.join(", ")}</td>
      <td className="col-md-3">{bass.comments}</td>
      <td className="col-md-3">{bass.waypoint}</td>
      <td className="col-md-3">{bass.size}</td>
      <td className="col-md-3">{bass.windDir}</td>
      <td className="col-md-3">{bass.pressure}</td>
      <td className="col-md-3">{bass.humidity}</td>
      <td className="col-md-3">{bass.precip}</td>
      <td className="col-md-3">{bass.cloudCover}</td>
      <td className="col-md-3">{bass.userID}</td>
    </tr>
  );
}

function BassTable({ bass }) {
  const bassItems = bass.map((b, index) => (
    <BassItem key={b.id} bass={b} />
  ));

  return (
    <div>
      <table className="table table-hover table-responsive w-auto">
        <thead>
          <tr className="bg-primary">
            <th className="col-md-3" scope="col">
              Date
            </th>
            <th className="col-md-3" scope="col">
              Lake
            </th>
            <th className="col-md-3" scope="col">
              Quantity
            </th>
            <th className="col-md-3" scope="col">
              Depth
            </th>
            <th className="col-md-3" scope="col">
              Air Temperature
            </th>
            <th className="col-md-3" scope="col">
              Water Temperature
            </th>
            <th className="col-md-3" scope="col">
              Conditions
            </th>
            <th className="col-md-3" scope="col">
              Wind Speed
            </th>
            <th className="col-md-3" scope="col">
              Water Clarity
            </th>
            <th className="col-md-3" scope="col">
              Lure
            </th>
            <th className="col-md-3" scope="col">
              Comments
            </th>
            <th className="col-md-3" scope="col">
              Waypoint
            </th>
            <th className="col-md-3" scope="col">
              Size
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
              User
            </th>
          </tr>
        </thead>
        <tbody>{bassItems}</tbody>
      </table>
    </div>
  );
}

export default BassTable;
