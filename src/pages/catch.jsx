import React from 'react'

export default function Catch () {

    return (
        <div className="container-fluid">
            <h1>Enter A Catch</h1>
            <form>
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Water Temp:</label>
                    <input type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Clarity:</label>
                    <select className="form-control">
                        <option>Clear</option>
                        <option>Muddy</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Wind:</label>
                    <select className="form-control">
                        <option>0-5</option>
                        <option>5-10</option>
                        <option>10-15</option>
                        <option>15-20</option>
                        <option>20-25</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Lure:</label>
                    <select className="form-control">
                        <option>Jig</option>
                        <option>Jerkbait</option>
                        <option>Crankbait</option>
                        <option>Dropshot</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Waypoint:</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Comments:</label>
                    <textarea rows="5" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Air Temp:</label>
                    <input type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Number of Fish:</label>
                    <input type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Size of Fish:</label>
                    <select className="form-control">
                        <option>0-2 lbs.</option>
                        <option>2-3 lbs.</option>
                        <option>4+ lbs.</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Depth:</label>
                    <input type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-primary">Cancel</button>
                </div>
            </form>
        </div>
    )
}