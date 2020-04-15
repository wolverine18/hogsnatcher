import React from "react";

function WalleyeItem({ walleye }) {
  return (
    <tr data-id={walleye.id}>
      <td className="col-md-3">{walleye.airTemp}</td>
      <td className="col-md-3">{walleye.comments}</td>
      <td className="col-md-3">{walleye.date}</td>
      <td className="col-md-3">{walleye.depth}</td>
      <td className="col-md-3">{walleye.lure}</td>
      <td className="col-md-3">{walleye.quantity}</td>
      <td className="col-md-3">{walleye.surfaceTemp}</td>
      <td className="col-md-3">{walleye.userID}</td>
      <td className="col-md-3">{walleye.visibility}</td>
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
        <tbody>{walleyeItems}</tbody>
      </table>
    </div>
  );
}

export default WalleyeTable;
