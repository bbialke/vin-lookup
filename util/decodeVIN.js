function decodeVIN(VIN) {
    console.log(`Decoding VIN ${VIN}`)
    //Perform checks for validity
    if (VIN.length != 17) {
        throw new Error(`VIN must be 17 characters long.`)
    }
    //Define array for the result of the decoding
    var output = {};
    //Check WMI
    var WMI = [VIN.charAt(0), VIN.charAt(1), VIN.charAt(2)];
    //Check manufacturing country
    var country = WMI[0];
    if (country == 1 || country == 4 || country == 5) {
        country = 'United States'
        output.country = country;
    }
    if (country == 2) {
        country = 'Canada'
        output.country = country;
    }

    //Return JSON result to the lookup module
    return output;
}

module.exports = decodeVIN;