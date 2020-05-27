//Define array for the result of the decoding
var output = {};

function checkCountry(country) {
    if (country == 1 || country == 4 || country == 5) {
        country = 'United States'
        output.country = country;
    }
    else if (country == 2) {
        country = 'Canada'
        output.country = country;
    }
    else if (country == 3) {
        country = 'Mexico'
        output.country = country;
    }
    else if (country == 'J') {
        country = 'Japan'
        output.country = country;
    }
    else if (country == 'K') {
        country = 'Korea'
        output.country = country;
    }
    else if (country == 'S') {
        country = 'United Kingdom'
        output.country = country;
    }
    else if (country == 'V') {
        country = 'France/Spain'
        output.country = country;
    }
    else if (country == 'T') {
        country = 'Switzerland'
        output.country = country;
    }
    else if (country == 'W') {
        country = 'Germany'
        output.country = country;
    }
    else if (country == 'Y') {
        country = 'Sweden/Finland'
        output.country = country;
    }
    else if (country == 'Z') {
        country = 'Italy'
        output.country = country;
    }
}

function decodeVIN(VIN) {
    console.log(`Decoding VIN ${VIN}`)
    //Perform checks for validity
    if (VIN.length != 17) {
        throw new Error(`VIN must be 17 characters long.`)
    }
    //Check WMI
    var WMI = [VIN.charAt(0), VIN.charAt(1), VIN.charAt(2)];
    //Check manufacturing country
    var country = WMI[0];
    checkCountry(country);
    //Return JSON result to the lookup module
    return output;
}

module.exports = decodeVIN;