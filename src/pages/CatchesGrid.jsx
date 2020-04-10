import React from 'react';

function CatchItem({catche}) {
    return (
        <tr data-id={catche.id}>
            <td className="col-md-3">{catche.airTemp}</td>
            <td className="col-md-3">{catche.comments}</td>
            <td className="col-md-3">{catche.date}</td>
            <td className="col-md-3">{catche.depth}</td>
            <td className="col-md-3">{catche.lure}</td>
            <td className="col-md-3">{catche.quantity}</td>
            <td className="col-md-3">{catche.size}</td>
            <td className="col-md-3">{catche.userID}</td>
            <td className="col-md-3">{catche.waterClarity}</td>
            <td className="col-md-3">{catche.waterTemp}</td>
            <td className="col-md-3">{catche.waypoint}</td>
            <td className="col-md-3">{catche.windSpeed}</td>
        </tr>
    )
}

function CatchesGrid ({catches}) {
    const catchItems = catches.map((catche, index) => (
        <CatchItem key={catche.id} catche ={catche} />
    ))

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr className='bg-primary'>
                        <th className="col-md-3" scope="col">Air Temperature</th>
                        <th className="col-md-3" scope="col">Comments</th>
                        <th className="col-md-3" scope="col">Date</th>
                        <th className="col-md-3" scope="col">Depth</th>
                        <th className="col-md-3" scope="col">Lure</th>
                        <th className="col-md-3" scope="col">Quantity</th>
                        <th className="col-md-3" scope="col">Size</th>
                        <th className="col-md-3" scope="col">User</th>
                        <th className="col-md-3" scope="col">Water Clarity</th>
                        <th className="col-md-3" scope="col">Water Temperature</th>
                        <th className="col-md-3" scope="col">Waypoint</th>
                        <th className="col-md-3" scope="col">Wind Speed</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {catchItems}
                </tbody>
            </table>
        </div>
    )
}

export default CatchesGrid;