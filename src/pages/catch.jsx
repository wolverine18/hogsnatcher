import React from 'react'
import API from '../API'

export default function Catch () {
    const [getCatch, setCatch] = React.useState([]);

    const updateCatch = (field, value) => {
        const newCatch = { ...getCatch};
        newCatch[field] = value;
        setCatch(newCatch);
    }

    const formSubmitted = (event) => {
        event.preventDefault();
        API.postNewCatch(getCatch);
    }

    const cancelClicked = (event) => {

    }

    return (
        <div className="container-fluid">
            <h1>Enter A Catch</h1>
            <form id="catchForm" onSubmit={formSubmitted}>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" className="form-control" value={getCatch.date} onChange={(event) => updateCatch('date', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="waterTemp">Water Temp:</label>
                    <input type="number" id="waterTemp" className="form-control" value={getCatch.waterTemp} onChange={(event) => updateCatch('waterTemp', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="waterClarity">Water Clarity:</label>
                    <select id="htmlFor" className="form-control" value={getCatch.waterClarity} onChange={(event) => updateCatch('waterClarity', event.target.value)}>
                        <option>Clear</option>
                        <option>Muddy</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="windSpeed">Wind Speed:</label>
                    <select id="Wind Speed" className="form-control" value={getCatch.windSpeed} onChange={(event) => updateCatch('windSpeed', event.target.value)}>
                        <option>0-5</option>
                        <option>5-10</option>
                        <option>10-15</option>
                        <option>15-20</option>
                        <option>20-25</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="lure">Lure:</label>
                    <select id="lure" className="form-control" value={getCatch.lure} onChange={(event) => updateCatch('lure', event.target.value)}>
                        <option>Jig</option>
                        <option>Jerkbait</option>
                        <option>Crankbait</option>
                        <option>Dropshot</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="waypoint">Waypoint:</label>
                    <input type="text" id="waypoint" className="form-control" value={getCatch.waypoint} onChange={(event) => updateCatch('waypoint', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" rows="5" className="form-control" value={getCatch.comments} onChange={(event) => updateCatch('comments', event.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="airTemp">Air Temp:</label>
                    <input type="number" id="airTemp" className="form-control" value={getCatch.airTemp} onChange={(event) => updateCatch('airTemp', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Number of Fish:</label>
                    <input type="number" id="quantity" className="form-control" value={getCatch.quantity} onChange={(event) => updateCatch('quantity', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size of Fish:</label>
                    <select id="size" className="form-control" value={getCatch.size} onChange={(event) => updateCatch('size', event.target.value)}>
                        <option>0-2 lbs.</option>
                        <option>2-3 lbs.</option>
                        <option>4+ lbs.</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="depth">Depth:</label>
                    <input type="number" id="depth" className="form-control" value={getCatch.depth} onChange={(event) => updateCatch('depth', event.target.value)}></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-primary" onClick={cancelClicked}>Cancel</button>
                </div>
            </form>
        </div>
    )
}