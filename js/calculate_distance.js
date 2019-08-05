var degToRad = require('./degreeToRadians');
// This function will calculate distance between original and destiation latitude and longitude
module.exports = {
    calculate_distance: function calculate_distance(originLatitude, originLongitude, destinationLatitude, destinationLongitude){
        resulatantLongitude = destinationLongitude - originLongitude;
        resulatantLatitude = destinationLatitude - originLatitude;
        a = (Math.sin(resulatantLatitude/2))^2 + Math.cos(originLatitude) * Math.cos(destinationLatitude) * (Math.sin(resulatantLongitude/2))^2;
        c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) );
    
        radius = 6371 // earth's radius
    
        d = radius * c //(where R is the radius of the Earth)
    
        resulatantLatitude = degToRad.radians(destinationLatitude-originLatitude);
        resulatantLongitude = degToRad.radians(destinationLongitude-originLongitude);
        a = Math.sin(resulatantLatitude/2) * Math.sin(resulatantLatitude/2) + Math.cos(degToRad.radians(originLatitude))
            * Math.cos(degToRad.radians(destinationLatitude)) * Math.sin(resulatantLongitude/2) * Math.sin(resulatantLongitude/2);
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        calculatedDistance = radius * c;
    
        return Math.round(calculatedDistance, 2);
    }
};