const sqlite3 = require('sqlite3').verbose();

async function get (WMI) {
    //Setup database
    var db;
    db = new sqlite3.Database('./node_modules/vin-lookup/VehicleData.sqlite');

    await db.get(`SELECT * FROM WMI WHERE WMI = "${WMI}"`, function (_err, row) {
        if (!row) {
            console.log('The manufacturer could not be identified');
            let output = "Unable to identify manufacturer";
            //Return result to the main module
            return output;
        }
        else {
            let output = row.Manufacturer;
            console.log('Done')
            //Return result to the main module
            console.log(output)
            return output;
        }
    })
}

module.exports = get;