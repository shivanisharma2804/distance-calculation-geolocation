// This function will convert degree to radians
module.exports = {
    radians: function radians(degrees) {
        var TAU = 2 * Math.PI;
        covertedToRadians = degrees * TAU / 360;
        return covertedToRadians;
    }
};