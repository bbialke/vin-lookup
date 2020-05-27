const decodeVIN = require('../util/decodeVIN');

async function lookup(VIN) {
    if (VIN === undefined) {
        throw new Error('No VIN provided, include one as a parameter');
    }
    try {
        result = decodeVIN(VIN);
        return result;
    } catch (error) {
        throw error;
    }
}


module.exports = lookup;