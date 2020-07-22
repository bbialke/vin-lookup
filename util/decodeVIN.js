const sqlite3 = require('sqlite3').verbose();
const checkWMI = require('./checkWMI');

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

async function decodeVIN(VIN) {
    //Setup database
    var db;
    db = new sqlite3.Database('./node_modules/vin-lookup/VehicleData.sqlite');

    console.log(`Decoding VIN ${VIN}`)
    //Perform checks for validity
    if (VIN.length != 17) {
        throw new Error(`VIN must be 17 characters long.`)
    }
    //Check WMI
    var WMI = [VIN.charAt(0), VIN.charAt(1), VIN.charAt(2)];
    var fullWMI = WMI.join('');
    //Check manufacturing country
    var country = WMI[0];
    checkCountry(country);
    //Check the WMI against the database of values
    console.log('Checking Database...');
    output.manufacturer = await checkWMI(fullWMI);
    console.log(output.manufacturer)
    //Get serial/production number
    var serialArr = [];
    for (var x = 12; x < 18; x++) {
        var c = VIN.charAt(x);
        serialArr.push(c);
    }
    var serial = serialArr.join("");
    output.serial = serial;
    //Return JSON result to the lookup module
    return output;
}

module.exports = decodeVIN;