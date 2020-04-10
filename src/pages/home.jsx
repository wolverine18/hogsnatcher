import React from 'react'
import axios from 'axios';

function Home() {
    const getCatches = () => {
        console.log('In get catches');
        axios.get('/catches')
        .then((res) => {
            res.data.forEach(element => console.log(element.id));
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        });
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button type="submit" onClick={getCatches}>Get Catches</button>
        </div>
    )
}

export default Home
