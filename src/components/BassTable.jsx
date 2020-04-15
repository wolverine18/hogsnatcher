import React from "react";

function BassItem({ bass }) {
  return (
    <tr data-id={bass.id}>
      <td className="col-md-3">{bass.airTemp}</td>
      <td className="col-md-3">{bass.comments}</td>
      <td className="col-md-3">{bass.date}</td>
      <td className="col-md-3">{bass.depth}</td>
      <td className="col-md-3">{bass.lure}</td>
      <td className="col-md-3">{bass.quantity}</td>
      <td className="col-md-3">{bass.size}</td>
      <td className="col-md-3">{bass.userID}</td>
      <td className="col-md-3">{bass.waterClarity}</td>
      <td className="col-md-3">{bass.waterTemp}</td>
      <td className="col-md-3">{bass.waypoint}</td>
      <td className="col-md-3">{bass.windSpeed}</td>
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
              Air Temperature
            </th>
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
              Size
            </th>
            <th className="col-md-3" scope="col">
              User
            </th>
            <th className="col-md-3" scope="col">
              Water Clarity
            </th>
            <th className="col-md-3" scope="col">
              Water Temperature
            </th>
            <th className="col-md-3" scope="col">
              Waypoint
            </th>
            <th className="col-md-3" scope="col">
              Wind Speed
            </th>
          </tr>
        </thead>
        <tbody>{bassItems}</tbody>
      </table>
    </div>
  );
}

export default BassTable;
