import React, { Component } from 'react'
import axios from 'axios';

export class home extends Component {
    componentDidMount() {
        axios.get('/catches')
        .then((res) => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default home
