const decodeVIN = require('../util/decodeVIN');

async function lookup(VIN) {
    if (VIN === undefined) {
        throw new Error('No VIN provided, include one as a parameter');
    }
    const optionQuery = formatOptions(options);
    try {
        const data = [];
        data.push(fetchData(URL, API_TOKEN, optionQuery));
        const fetchedData = await Promise.all(data);
        return mergeData(fetchedData);
    } catch (error) {
        throw error;
    }
}


module.exports = lookup;