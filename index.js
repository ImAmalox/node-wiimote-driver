const HID = require('node-hid');

let VENDOR_ID = 1406;
let PRODUCT_ID = 774;

let wiimotes = HID.devices(VENDOR_ID, PRODUCT_ID);
let paths = [];

wiimotes.forEach(wiimote => {
    paths.push(wiimote.path);
})

let wiimote = new HID.HID(paths[0]);


wiimote.on('data', function(data) {
    console.log(data);
});