
class Location {
    static getLocation (gotLocation, errHandler) {
        if (navigator.geolocation) {
            // timeout at 60000 milliseconds (60 seconds)
            var options = {timeout:60000};
            navigator.geolocation.getCurrentPosition(gotLocation, errHandler, options);    
        } else {
            alert("Browser does not support geolocation");
        }
    }
}

export default Location;