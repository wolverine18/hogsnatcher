import React from "react";

function SalmonItem({ salmon }) {
  return (
    <tr data-id={salmon.id}>
      <td className="col-md-3">{salmon.airTemp}</td>
      <td className="col-md-3">{salmon.comments}</td>
      <td className="col-md-3">{salmon.date}</td>
      <td className="col-md-3">{salmon.depth}</td>
      <td className="col-md-3">{salmon.lure}</td>
      <td className="col-md-3">{salmon.paddleName}</td>
      <td className="col-md-3">{salmon.paddleSize}</td>
      <td className="col-md-3">{salmon.quantity}</td>
      <td className="col-md-3">{salmon.rodType}</td>
      <td className="col-md-3">{salmon.surfaceTemp}</td>
      <td className="col-md-3">{salmon.userID}</td>
      <td className="col-md-3">{salmon.visibility}</td>
    </tr>
  );
}

function SalmonTable({ salmon }) {
  const salmonItems = salmon.map((s, index) => (
    <SalmonItem key={s.id} salmon={s} />
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
              Paddle Name
            </th>
            <th className="col-md-3" scope="col">
              Paddle Size
            </th>
            <th className="col-md-3" scope="col">
              Quantity
            </th>
            <th className="col-md-3" scope="col">
              Rod Type
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
          </tr>
        </thead>
        <tbody>{salmonItems}</tbody>
      </table>
    </div>
  );
}

export default SalmonTable;
