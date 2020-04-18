import React from "react";

function About () {

    return (
        <div>
            <h1>About Hog Snatcher</h1>
            <p>Web app to be used to log fish catches, and to view previous data.</p>
            <p>React front end</p>
            <p>Firebase backend. API and web app are deployed to the cloud using firebase.</p>
            <p>Weather information taken from <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a></p>
            <p>Tested using <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a></p>
            <p>Styled using <a href="https://getbootstrap.com/" target="_blank">Bootstrap CDN</a></p>
        </div>
    )
}

export default About;